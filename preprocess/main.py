import json;

def add_to_dict(dict, word):
  if word not in dict.keys():
    dict[word] = 1
  else:
    dict[word] += 1
  
  return dict

def simplify_dict(dict):
  tokens = dict.keys()
  tokens = [t for t in tokens if t != '']
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

DATA_FILE = '../src/data/'

f = open('quotes.txt', 'r')
content = f.read().lower()
content = content.split('\n')
start_tokens = {}
end_tokens = {}
sequence = {}
for quote in content:
  words = quote.split(' ')
  add_to_dict(start_tokens, words[0])
  add_to_dict(end_tokens, words[-1])
  for word_index in range(len(words) - 1):
    this_word = words[word_index]
    next_word = words[word_index + 1]
    if this_word not in sequence.keys():
      sequence[this_word] = {}
    if next_word not in sequence[this_word].keys():
      sequence[this_word][next_word] = 1
    else: 
      sequence[this_word][next_word] += 1

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
