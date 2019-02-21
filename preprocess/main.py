import json;

ORDER_MARKOV = 2
DATA_FILE = '../src/data/'

def add_to_dict(dict, word):
  if word not in dict.keys():
    dict[word] = 1
  else:
    dict[word] += 1
  
  return dict

def clean_array(arr):
  return [t for t in arr if t != '']

def simplify_dict(dict):
  tokens = dict.keys()
  tokens = clean_array(tokens)

  tokens.sort()
  probs = []
  for token in tokens:
    probs.append(dict[token])
  total = sum(probs)
  cum = 0
  normalized = []
  for x in probs:
    cum += x
    normalized.append(cum / float(total))
  
  return {
    'tokens': tokens,
    'probs': normalized,
  }

f = open('quotes.txt', 'r')
content = f.read().lower()
content = content.split('\n')
start_tokens = {}
end_tokens = {}
sequence = {}
for quote in content:
  words = clean_array(quote.split(' '))
  num_words = len(words)
  
  this_join = ' '.join(words[0:min(ORDER_MARKOV, num_words)])
  add_to_dict(start_tokens, this_join)
  if num_words <= ORDER_MARKOV:
    add_to_dict(end_tokens, this_join)
    continue    
  this_join = ' '.join(words[-ORDER_MARKOV:])
  add_to_dict(end_tokens, this_join)

  for word_index in range(len(words) - ORDER_MARKOV):
    this_join = ' '.join(words[word_index:(word_index + ORDER_MARKOV)])
    next_word = words[word_index + ORDER_MARKOV]
    if this_join not in sequence.keys():
      sequence[this_join] = {}
    if next_word not in sequence[this_join].keys():
      sequence[this_join][next_word] = 1
    else: 
      sequence[this_join][next_word] += 1

fstart = open(DATA_FILE + 'start.js', 'w')
fstart.write('const START_TOKENS = ')
fstop = open(DATA_FILE + 'stop.js', 'w')
fstop.write('const STOP_TOKENS = ')
fsequence = open(DATA_FILE + 'sequence.js', 'w')
fsequence.write('const SEQUENCE = ')

json.dump(simplify_dict(start_tokens), fstart)
json.dump(simplify_dict(end_tokens), fstop)

clean_sequence = {}
for key in sequence.keys():
  clean_sequence[key] = simplify_dict(sequence[key])
json.dump(clean_sequence, fsequence)

fstart.write('\nexport default START_TOKENS;\n')
fstop.write('\nexport default STOP_TOKENS;\n')
fsequence.write('\nexport default SEQUENCE;\n')

fstart.close()
fstop.close()
fsequence.close()
f.close()
