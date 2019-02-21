const START_TOKENS = {"tokens": ["a adversidade", "a alegria", "a coragem", "a diferen\u00e7a", "a disciplina", "a esperan\u00e7a", "a imagina\u00e7\u00e3o", "a l\u00f3gica", "a mente", "a partir", "a persist\u00eancia", "a simplicidade", "a verdadeira", "a vida", "a vitalidade", "a vit\u00f3ria", "acredite em", "acredite.", "acredito que", "agir, eis", "ao sofrer", "apenas sonhar", "as pessoas", "as \u00fanicas", "bom mesmo", "cada indiv\u00edduo", "comece a", "comece fazendo", "considerado um", "controle o", "coragem \u00e9", "criatividade \u00e9", "deve-se utilizar", "dificuldades preparam", "elimine pensamentos", "escolha uma", "estou convencido", "eu descobri", "eu n\u00e3o", "eu sei", "eu tentei", "evite alimentar", "existe o", "existe somente", "falhar faz", "fazemos nossos", "fa\u00e7a de", "inten\u00e7\u00e3o sem", "j\u00e1 dizia", "levante-se! tenha", "lute com", "mantenha dist\u00e2ncia", "muitas das", "muitos de", "muitos dos", "nenhum homem", "nenhum obst\u00e1culo", "ningu\u00e9m tem", "no fim", "no meio", "nossa maior", "nosso maior", "nunca avalie", "nunca deixe", "nunca \u00e9", "n\u00e3o abandone", "n\u00e3o crie", "n\u00e3o deixe", "n\u00e3o existe", "n\u00e3o existem", "n\u00e3o h\u00e1", "n\u00e3o importa", "n\u00e3o julgue", "n\u00e3o podemos", "n\u00e3o se", "n\u00e3o terceirize", "n\u00e3o \u00e9", "n\u00f3s nos", "o desempenho", "o entusiasmo", "o grande", "o homem", "o mais", "o planejamento", "o primeiro", "o que", "o segredo", "o ser", "o seu", "o sucesso", "o verdadeiro", "o \u00eaxito", "o \u00fanico", "onde h\u00e1", "os desafios", "os milagres", "os primeiros", "os sonhos", "ouse ir", "ouse, arrisque,", "para conquistar", "para mentes", "para mim,", "para o", "para qu\u00ea", "para ser", "para ter", "passei a", "pessoas que", "pessoas vencedoras", "pra cima.", "procure se", "procure ter", "qual seu", "quando tudo", "quando uma", "quando voc\u00ea", "quanto mais", "que sentido", "que tipo", "recuse o", "saber a", "saiba se", "se derrame.", "se fracassar,", "se n\u00e3o", "se podemos", "se queres", "se quisermos", "se tu", "se voc\u00ea", "seja grato", "sempre que", "sempre \u00e9", "ser grato", "simplesmente, sorria!", "sonhos que", "sorria. o", "sorte \u00e9", "suba o", "superar o", "s\u00e3o as", "s\u00f3 eu", "s\u00f3 existe", "s\u00f3 se", "s\u00f3 uma", "talento \u00e9", "tartarugas conhecem", "tenho aprendido", "tentar e", "tente mover", "ter sucesso", "tire a", "toda a", "toda a\u00e7\u00e3o", "trocava toda", "tudo o", "um bom", "um obst\u00e1culo", "um ponto", "uma jornada", "uma longa", "uma vez", "use seu", "vencer \u00e9", "viva a", "voc\u00ea deve", "voc\u00ea nunca", "voc\u00ea n\u00e3o", "voc\u00ea pode", "voc\u00ea precisa", "voc\u00ea se", "voc\u00ea s\u00f3", "voc\u00ea \u00e9", "\u00c0s vezes", "\u00c0s vezes,", "\u00c9 imposs\u00edvel", "\u00c9 parte"], "probs": [0.004545454545454545, 0.00909090909090909, 0.013636363636363636, 0.01818181818181818, 0.022727272727272728, 0.031818181818181815, 0.03636363636363636, 0.04090909090909091, 0.05, 0.05454545454545454, 0.05909090909090909, 0.06363636363636363, 0.06818181818181818, 0.08181818181818182, 0.08636363636363636, 0.09545454545454546, 0.1, 0.10454545454545454, 0.10909090909090909, 0.11363636363636363, 0.11818181818181818, 0.12272727272727273, 0.14545454545454545, 0.15454545454545454, 0.16363636363636364, 0.16818181818181818, 0.17272727272727273, 0.17727272727272728, 0.18181818181818182, 0.18636363636363637, 0.19090909090909092, 0.19545454545454546, 0.2, 0.20454545454545456, 0.20909090909090908, 0.21363636363636362, 0.21818181818181817, 0.22272727272727272, 0.23636363636363636, 0.24545454545454545, 0.25, 0.2545454545454545, 0.2590909090909091, 0.2636363636363636, 0.2681818181818182, 0.2727272727272727, 0.2772727272727273, 0.2818181818181818, 0.2863636363636364, 0.2909090909090909, 0.29545454545454547, 0.3, 0.30454545454545456, 0.3090909090909091, 0.31363636363636366, 0.3181818181818182, 0.32272727272727275, 0.32727272727272727, 0.33181818181818185, 0.33636363636363636, 0.3409090909090909, 0.34545454545454546, 0.35, 0.35454545454545455, 0.36363636363636365, 0.36818181818181817, 0.37272727272727274, 0.38181818181818183, 0.38636363636363635, 0.39090909090909093, 0.4, 0.4090909090909091, 0.41363636363636364, 0.41818181818181815, 0.42272727272727273, 0.42727272727272725, 0.43636363636363634, 0.4409090909090909, 0.44545454545454544, 0.45454545454545453, 0.4590909090909091, 0.4681818181818182, 0.4727272727272727, 0.4772727272727273, 0.4818181818181818, 0.4863636363636364, 0.4909090909090909, 0.4954545454545455, 0.5, 0.5272727272727272, 0.5318181818181819, 0.5363636363636364, 0.5409090909090909, 0.5454545454545454, 0.55, 0.5545454545454546, 0.5590909090909091, 0.5636363636363636, 0.5681818181818182, 0.5727272727272728, 0.5772727272727273, 0.5818181818181818, 0.5863636363636363, 0.5909090909090909, 0.5954545454545455, 0.6045454545454545, 0.6181818181818182, 0.6227272727272727, 0.6272727272727273, 0.6318181818181818, 0.6363636363636364, 0.6409090909090909, 0.6454545454545455, 0.65, 0.6545454545454545, 0.6590909090909091, 0.6636363636363637, 0.6772727272727272, 0.6818181818181818, 0.6863636363636364, 0.6909090909090909, 0.6954545454545454, 0.7, 0.7045454545454546, 0.7090909090909091, 0.7181818181818181, 0.7227272727272728, 0.7272727272727273, 0.7318181818181818, 0.7363636363636363, 0.7681818181818182, 0.7727272727272727, 0.7772727272727272, 0.7818181818181819, 0.7863636363636364, 0.7909090909090909, 0.7954545454545454, 0.8, 0.8045454545454546, 0.8136363636363636, 0.8181818181818182, 0.8227272727272728, 0.8272727272727273, 0.8318181818181818, 0.8363636363636363, 0.8409090909090909, 0.8454545454545455, 0.85, 0.8545454545454545, 0.8590909090909091, 0.8636363636363636, 0.8681818181818182, 0.8727272727272727, 0.8772727272727273, 0.8818181818181818, 0.8863636363636364, 0.8909090909090909, 0.9, 0.9045454545454545, 0.9090909090909091, 0.9136363636363637, 0.9181818181818182, 0.9227272727272727, 0.9272727272727272, 0.9318181818181818, 0.9363636363636364, 0.9409090909090909, 0.9454545454545454, 0.9545454545454546, 0.9590909090909091, 0.9636363636363636, 0.9727272727272728, 0.9772727272727273, 0.9818181818181818, 0.9863636363636363, 0.990909090909091, 0.9954545454545455, 1.0]}
export default START_TOKENS;
