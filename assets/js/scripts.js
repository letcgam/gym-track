const exercicios = [
    {
        "id": 1,
        "nome": "Supino Reto com Barra",
        "grupo_muscular": "Peitoral",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Deite-se em um banco reto, segure a barra com pegada aberta e empurre para cima. Abaixe até o peito com controle.",
        "video": "https://www.youtube.com/watch?v=3K6zZ7cT5H0"
    },
    {
        "id": 2,
        "nome": "Agachamento Livre",
        "grupo_muscular": "Pernas",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Com a barra sobre os ombros, agache mantendo a coluna reta e os pés alinhados aos ombros.",
        "video": "https://www.youtube.com/watch?v=UxJkS3FlsB0"
    },
    {
        "id": 3,
        "nome": "Puxada Frontal na Polia Alta",
        "grupo_muscular": "Costas",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Sentado, segure a barra com pegada aberta e puxe até a altura do peito. Retorne lentamente.",
        "video": "https://www.youtube.com/watch?v=7kUVVrv9vUA"
    },
    {
        "id": 4,
        "nome": "Remada Curvada com Barra",
        "grupo_muscular": "Costas",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Incline o tronco à frente, segure a barra e puxe até o abdômen mantendo os cotovelos próximos ao corpo.",
        "video": "https://www.youtube.com/watch?v=GZbfZ033f74"
    },
    {
        "id": 5,
        "nome": "Desenvolvimento com Halteres",
        "grupo_muscular": "Ombros",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Sentado, segure os halteres ao lado da cabeça e empurre para cima. Abaixe com controle.",
        "video": "https://www.youtube.com/watch?v=B-aVuyhvLHU"
    },
    {
        "id": 6,
        "nome": "Elevação Lateral com Halteres",
        "grupo_muscular": "Ombros",
        "tipo": "Isolamento",
        "equipamento": "Halteres",
        "instrucoes": "Eleve os braços lateralmente até a altura dos ombros, com cotovelos levemente flexionados.",
        "video": "https://www.youtube.com/watch?v=3VcKaXpzqRo"
    },
    {
        "id": 7,
        "nome": "Rosca Direta com Barra",
        "grupo_muscular": "Bíceps",
        "tipo": "Isolamento",
        "equipamento": "Barra",
        "instrucoes": "Em pé, com a barra nas mãos, flexione os cotovelos sem mover os ombros.",
        "video": "https://www.youtube.com/watch?v=kwG2ipFRgfo"
    },
    {
        "id": 8,
        "nome": "Tríceps na Polia (Pulley)",
        "grupo_muscular": "Tríceps",
        "tipo": "Isolamento",
        "equipamento": "Máquina",
        "instrucoes": "Em pé, segure a barra e empurre para baixo até estender completamente os braços.",
        "video": "https://www.youtube.com/watch?v=2-LAMcpzODU"
    },
    {
        "id": 9,
        "nome": "Cadeira Extensora",
        "grupo_muscular": "Quadríceps",
        "tipo": "Isolamento",
        "equipamento": "Máquina",
        "instrucoes": "Sentado, estenda as pernas até a contração total dos quadríceps e retorne lentamente.",
        "video": "https://www.youtube.com/watch?v=8iPEnn-ltC8"
    },
    {
        "id": 10,
        "nome": "Mesa Flexora",
        "grupo_muscular": "Posterior da Coxa",
        "tipo": "Isolamento",
        "equipamento": "Máquina",
        "instrucoes": "Deitado na máquina, flexione os joelhos puxando o peso para cima.",
        "video": "https://www.youtube.com/watch?v=0aV3InKcIuI"
    },
    {
        "id": 11,
        "nome": "Abdominal Supra no Solo",
        "grupo_muscular": "Abdômen",
        "tipo": "Resistência",
        "equipamento": "Peso corporal",
        "instrucoes": "Deitado, flexione o tronco tirando os ombros do chão. Retorne com controle.",
        "video": "https://www.youtube.com/watch?v=QpVMZz9tMKo"
    },
    {
        "id": 12,
        "nome": "Abdominal Infra no Banco",
        "grupo_muscular": "Abdômen inferior",
        "tipo": "Resistência",
        "equipamento": "Banco",
        "instrucoes": "Deitado, levante as pernas em direção ao peito e retorne lentamente.",
        "video": "https://www.youtube.com/watch?v=fBN5bT_9wwI"
    },
    {
        "id": 13,
        "nome": "Panturrilha em Pé",
        "grupo_muscular": "Panturrilhas",
        "tipo": "Isolamento",
        "equipamento": "Máquina ou peso corporal",
        "instrucoes": "Eleve os calcanhares ficando na ponta dos pés e desça devagar.",
        "video": "https://www.youtube.com/watch?v=YMmgqO8Jo-k"
    },
    {
        "id": 14,
        "nome": "Levantamento Terra",
        "grupo_muscular": "Posterior da Coxa / Lombar",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Com a barra no chão, levante-a mantendo a coluna neutra e os joelhos semiflexionados.",
        "video": "https://www.youtube.com/watch?v=ytGaGIn3SjE"
    },
    {
        "id": 15,
        "nome": "Pulldown com Pegada Neutra",
        "grupo_muscular": "Costas",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Segure as alças com pegada neutra e puxe até a linha do peito.",
        "video": "https://www.youtube.com/watch?v=-koP10y1qZI"
    },
    {
        "id": 16,
        "nome": "Crucifixo com Halteres",
        "grupo_muscular": "Peitoral",
        "tipo": "Isolamento",
        "equipamento": "Halteres",
        "instrucoes": "Deitado em banco reto, abra os braços e feche-os mantendo os cotovelos levemente flexionados.",
        "video": "https://www.youtube.com/watch?v=eozdVDA78K0"
    },
    {
        "id": 17,
        "nome": "Stiff com Halteres",
        "grupo_muscular": "Posterior da Coxa / Glúteos",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Em pé, com os halteres nas mãos, flexione o quadril mantendo as pernas quase estendidas.",
        "video": "https://www.youtube.com/watch?v=RZbS3VgD_vM"
    },
    {
        "id": 18,
        "nome": "Flexão de Braço",
        "grupo_muscular": "Peitoral / Tríceps",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Deite-se de barriga para baixo e empurre o corpo para cima estendendo os braços.",
        "video": "https://www.youtube.com/watch?v=IODxDxX7oi4"
    },
    {
        "id": 19,
        "nome": "Afundo com Halteres",
        "grupo_muscular": "Pernas / Glúteos",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Dê um passo à frente e flexione os joelhos, mantendo o tronco reto.",
        "video": "https://www.youtube.com/watch?v=QF0BQS2W80k"
    },
    {
        "id": 20,
        "nome": "Rosca Martelo",
        "grupo_muscular": "Bíceps",
        "tipo": "Isolamento",
        "equipamento": "Halteres",
        "instrucoes": "Com os halteres nas mãos, levante-os com as palmas voltadas uma para a outra.",
        "video": "https://www.youtube.com/watch?v=zC3nLlEvin4"
    },
    {
        "id": 21,
        "nome": "Barra Fixa",
        "grupo_muscular": "Costas / Bíceps",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Com as palmas das mãos voltadas para frente, segure a barra e puxe-se até o queixo ultrapassar a barra.",
        "video": "https://www.youtube.com/watch?v=VZvV7s71P3M"
    },
    {
        "id": 22,
        "nome": "Prancha",
        "grupo_muscular": "Core",
        "tipo": "Estabilidade",
        "equipamento": "Peso corporal",
        "instrucoes": "Fique na posição de flexão, mas com os cotovelos no chão, mantendo o corpo reto.",
        "video": "https://www.youtube.com/watch?v=pSHjTRCQxIw"
    },
    {
        "id": 23,
        "nome": "Deadlift com Halteres",
        "grupo_muscular": "Posterior da Coxa / Glúteos",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Segure os halteres com as palmas das mãos voltadas para o corpo, flexione os quadris e abaixe os halteres até o nível dos joelhos.",
        "video": "https://www.youtube.com/watch?v=pRzDHzp4VVQ"
    },
    {
        "id": 24,
        "nome": "Flexão de Braço com Pés Elevados",
        "grupo_muscular": "Peitoral",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Com os pés elevados em um banco, execute a flexão de braço, mantendo a postura estável.",
        "video": "https://www.youtube.com/watch?v=g-B4N9bX2-o"
    },
    {
        "id": 25,
        "nome": "Pullover com Halteres",
        "grupo_muscular": "Peitoral / Costas",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Deitado em um banco reto, segure o haltere com as duas mãos e movimente-o para trás da cabeça e para frente, estendendo os braços.",
        "video": "https://www.youtube.com/watch?v=0EmlHfIzlGc"
    },
    {
        "id": 26,
        "nome": "Kettlebell Swing",
        "grupo_muscular": "Glúteos / Pernas",
        "tipo": "Força / Cardiovascular",
        "equipamento": "Kettlebell",
        "instrucoes": "Segure o kettlebell com as duas mãos e faça o movimento de balançar o peso entre as pernas e para cima, até a altura dos ombros.",
        "video": "https://www.youtube.com/watch?v=4uT5T17r-5Q"
    },
    {
        "id": 27,
        "nome": "Leg Press",
        "grupo_muscular": "Pernas",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Sente-se na máquina e empurre o peso com as pernas, mantendo os pés alinhados.",
        "video": "https://www.youtube.com/watch?v=IZxyjJix3N8"
    },
    {
        "id": 28,
        "nome": "Glúteo na Polia Baixa",
        "grupo_muscular": "Glúteos",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Com uma tornozeleira na polia baixa, faça o movimento de extensão de quadril, trazendo a perna para trás.",
        "video": "https://www.youtube.com/watch?v=J9fowmQ3Qw4"
    },
    {
        "id": 29,
        "nome": "Ponte de Glúteos",
        "grupo_muscular": "Glúteos / Posterior de Coxa",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Deite-se de costas com os pés apoiados no chão, levante os quadris até o corpo formar uma linha reta.",
        "video": "https://www.youtube.com/watch?v=wpmuJ0V5ZFg"
    },
    {
        "id": 30,
        "nome": "Elevação de Quadril com Peso",
        "grupo_muscular": "Glúteos / Posterior de Coxa",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Deite-se com os pés no chão, coloque um haltere sobre os quadris e eleve os quadris até alinhar com os ombros e joelhos.",
        "video": "https://www.youtube.com/watch?v=APZTtG0JhG4"
    },
    {
        "id": 31,
        "nome": "Abdominal Obliquo com Halteres",
        "grupo_muscular": "Abdômen / Oblíquos",
        "tipo": "Isolamento",
        "equipamento": "Halteres",
        "instrucoes": "Deitado de lado, segure um haltere com a mão e eleve o tronco em direção ao quadril, contraindo os oblíquos.",
        "video": "https://www.youtube.com/watch?v=qaCQMy_bL9A"
    },
    {
        "id": 32,
        "nome": "Deslocamento com Halteres (Walking Lunge)",
        "grupo_muscular": "Pernas / Glúteos",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Com os halteres nas mãos, dê um passo à frente e flexione os joelhos em um afundo, alternando as pernas.",
        "video": "https://www.youtube.com/watch?v=Qov1Npq5sSA"
    },
    {
        "id": 33,
        "nome": "Agachamento Búlgaro",
        "grupo_muscular": "Pernas / Glúteos",
        "tipo": "Força",
        "equipamento": "Banco",
        "instrucoes": "Com uma perna apoiada no banco atrás de você, agache com a outra perna até o joelho ficar a 90 graus.",
        "video": "https://www.youtube.com/watch?v=vu2S5o9a9gM"
    },
    {
        "id": 34,
        "nome": "Barra Paralela",
        "grupo_muscular": "Tríceps / Peitoral",
        "tipo": "Força",
        "equipamento": "Paralelas",
        "instrucoes": "Com as mãos nas barras, abaixe o corpo flexionando os cotovelos e, em seguida, empurre para cima.",
        "video": "https://www.youtube.com/watch?v=LY0sN4dcZFk"
    },
    {
        "id": 35,
        "nome": "Hip Thrust",
        "grupo_muscular": "Glúteos",
        "tipo": "Força",
        "equipamento": "Barra / Banco",
        "instrucoes": "Com os ombros apoiados em um banco e os pés no chão, coloque a barra sobre os quadris e levante os quadris até alinhá-los com os ombros e joelhos.",
        "video": "https://www.youtube.com/watch?v=LM8XHLYJoYQ"
    },
    {
        "id": 36,
        "nome": "Dips",
        "grupo_muscular": "Tríceps / Peitoral",
        "tipo": "Força",
        "equipamento": "Paralelas",
        "instrucoes": "Com as mãos nas barras, abaixe o corpo e depois empurre para cima, estendendo os cotovelos.",
        "video": "https://www.youtube.com/watch?v=2z8JmcrW-As"
    },
    {
        "id": 37,
        "nome": "Corda Naval",
        "grupo_muscular": "Cardiovascular / Core",
        "tipo": "Cardio",
        "equipamento": "Corda",
        "instrucoes": "Segure as extremidades da corda e faça movimentos rápidos para criar ondas no comprimento da corda.",
        "video": "https://www.youtube.com/watch?v=jy-QOjHtQrc"
    },
    {
        "id": 38,
        "nome": "Bicicleta no Solo (Abdominal)",
        "grupo_muscular": "Abdômen",
        "tipo": "Resistência",
        "equipamento": "Peso corporal",
        "instrucoes": "Deitado de costas, leve o cotovelo oposto ao joelho, alternando com a perna esticada.",
        "video": "https://www.youtube.com/watch?v=9FGilxC7P2M"
    },
    {
        "id": 39,
        "nome": "Flexão de Braço com Palms Up",
        "grupo_muscular": "Peitoral / Bíceps",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Deitado de barriga para baixo, com as palmas das mãos voltadas para cima, execute a flexão de braço.",
        "video": "https://www.youtube.com/watch?v=0po45FjRlB4"
    },
    {
        "id": 40,
        "nome": "Russian Twist com Peso",
        "grupo_muscular": "Abdômen",
        "tipo": "Isolamento",
        "equipamento": "Peso corporal / Halteres",
        "instrucoes": "Sentado no chão, com os pés elevados, torça o tronco para cada lado com um peso.",
        "video": "https://www.youtube.com/watch?v=wkD8rjkodUI"
    },
    {
        "id": 41,
        "nome": "Mountain Climbers",
        "grupo_muscular": "Cardio / Abdômen",
        "tipo": "Cardio",
        "equipamento": "Peso corporal",
        "instrucoes": "Na posição de flexão, alterne rapidamente as pernas, simulando uma corrida.",
        "video": "https://www.youtube.com/watch?v=nmwgirgXLYM"
    },
    {
        "id": 42,
        "nome": "Side Plank",
        "grupo_muscular": "Core",
        "tipo": "Estabilidade",
        "equipamento": "Peso corporal",
        "instrucoes": "Fique de lado, apoiando-se no cotovelo e mantendo o corpo reto.",
        "video": "https://www.youtube.com/watch?v=Kp9x1XYXvl8"
    },
    {
        "id": 43,
        "nome": "Cadeira Abdutora",
        "grupo_muscular": "Glúteos / Abdutores",
        "tipo": "Isolamento",
        "equipamento": "Máquina",
        "instrucoes": "Sente-se na cadeira, coloque as pernas entre as almofadas e abra as pernas lateralmente, contraindo os glúteos.",
        "video": "https://www.youtube.com/watch?v=45rjJ98Km_M"
    },
    {
        "id": 44,
        "nome": "Cadeira Adutora",
        "grupo_muscular": "Adutores",
        "tipo": "Isolamento",
        "equipamento": "Máquina",
        "instrucoes": "Sente-se na cadeira, posicione as pernas entre as almofadas e as aproxime, contraindo os músculos internos da coxa.",
        "video": "https://www.youtube.com/watch?v=HY6IWpH5Kmw"
    },
    {
        "id": 45,
        "nome": "Flexão de Braço com Pés Elevados",
        "grupo_muscular": "Peitoral / Tríceps",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Com os pés elevados em um banco, faça a flexão de braços, mantendo os cotovelos próximos ao corpo.",
        "video": "https://www.youtube.com/watch?v=FUPp1eV0Cpo"
    },
    {
        "id": 46,
        "nome": "Agachamento Hack",
        "grupo_muscular": "Pernas",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Posicione-se na máquina de hack, mantendo os pés na plataforma e flexione os joelhos, alinhando-os com os pés.",
        "video": "https://www.youtube.com/watch?v=81oMJ8N5U6A"
    },
    {
        "id": 47,
        "nome": "Bicicleta Ergométrica",
        "grupo_muscular": "Cardiovascular",
        "tipo": "Cardio",
        "equipamento": "Bicicleta Ergométrica",
        "instrucoes": "Pedale com resistência moderada para melhorar a resistência cardiovascular.",
        "video": "https://www.youtube.com/watch?v=wPnoHJgd6eM"
    },
    {
        "id": 48,
        "nome": "Puxada na Polia com Pegada Invertida",
        "grupo_muscular": "Costas / Bíceps",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Segure a barra com as palmas das mãos voltadas para você e puxe até o peito.",
        "video": "https://www.youtube.com/watch?v=gzGH61ZXk10"
    },
    {
        "id": 49,
        "nome": "Agachamento Frontal",
        "grupo_muscular": "Pernas",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Coloque a barra sobre os ombros, flexione os joelhos e agache, mantendo a coluna reta.",
        "video": "https://www.youtube.com/watch?v=v5y1x9OOG6k"
    },
    {
        "id": 50,
        "nome": "Puxada no TRX",
        "grupo_muscular": "Costas",
        "tipo": "Força",
        "equipamento": "TRX",
        "instrucoes": "Segure as alças do TRX, incline-se para trás e puxe o corpo em direção ao ponto de fixação.",
        "video": "https://www.youtube.com/watch?v=VYhbE0W0s5I"
    },
    {
        "id": 51,
        "nome": "Rope Climbers",
        "grupo_muscular": "Cardio / Core",
        "tipo": "Cardio",
        "equipamento": "Corda",
        "instrucoes": "Use a corda de maneira intensa, simulando o movimento de escalar.",
        "video": "https://www.youtube.com/watch?v=HZ7LzRjUtQA"
    },
    {
        "id": 52,
        "nome": "Chin-Up",
        "grupo_muscular": "Costas / Bíceps",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Com as palmas das mãos voltadas para você, segure a barra e puxe-se até o queixo ultrapassar a barra.",
        "video": "https://www.youtube.com/watch?v=CSxFgxkk0wA"
    },
    {
        "id": 53,
        "nome": "Kettlebell Clean and Press",
        "grupo_muscular": "Pernas / Ombros",
        "tipo": "Força",
        "equipamento": "Kettlebell",
        "instrucoes": "Levante o kettlebell até a altura dos ombros e então empurre-o acima da cabeça.",
        "video": "https://www.youtube.com/watch?v=ffntOfyBQJo"
    },
    {
        "id": 54,
        "nome": "Flexão com Mãos Alternadas",
        "grupo_muscular": "Peitoral / Tríceps",
        "tipo": "Força",
        "equipamento": "Peso corporal",
        "instrucoes": "Realize uma flexão de braço tradicional, alternando a mão que fica apoiada no chão entre cada repetição.",
        "video": "https://www.youtube.com/watch?v=V3UMJtY9yB8"
    },
    {
        "id": 55,
        "nome": "Tríceps Testa com Barra",
        "grupo_muscular": "Tríceps",
        "tipo": "Isolamento",
        "equipamento": "Barra",
        "instrucoes": "Deitado em um banco, segure a barra e leve-a em direção à testa, flexionando os cotovelos.",
        "video": "https://www.youtube.com/watch?v=p6bWf_vbcCw"
    },
    {
        "id": 56,
        "nome": "Abdominal Lateral com Halteres",
        "grupo_muscular": "Abdômen",
        "tipo": "Isolamento",
        "equipamento": "Halteres",
        "instrucoes": "Deite-se de lado, segurando um haltere com a mão de cima, e eleve o tronco lateralmente.",
        "video": "https://www.youtube.com/watch?v=6_Ysq-4rP1s"
    },
    {
        "id": 57,
        "nome": "Pular Corda",
        "grupo_muscular": "Cardio",
        "tipo": "Cardio",
        "equipamento": "Corda",
        "instrucoes": "Pule corda em ritmo constante para melhorar o condicionamento físico.",
        "video": "https://www.youtube.com/watch?v=64u7zG5y-fQ"
    },
    {
        "id": 58,
        "nome": "Box Jump",
        "grupo_muscular": "Pernas / Cardio",
        "tipo": "Explosão",
        "equipamento": "Caixa",
        "instrucoes": "A partir de uma posição de agachamento, pule para cima da caixa com ambos os pés.",
        "video": "https://www.youtube.com/watch?v=52dH-DXn84w"
    },
    {
        "id": 59,
        "nome": "Puxada por Trás com Pegada Neutra",
        "grupo_muscular": "Costas / Bíceps",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Segure a barra com as palmas das mãos voltadas uma para a outra e puxe até o peito.",
        "video": "https://www.youtube.com/watch?v=hvqM_P8Qu2E"
    },
    {
        "id": 60,
        "nome": "Pulley com Tríceps",
        "grupo_muscular": "Tríceps",
        "tipo": "Isolamento",
        "equipamento": "Polia",
        "instrucoes": "Puxe a barra para baixo até os braços estarem completamente estendidos, mantendo os cotovelos fixos.",
        "video": "https://www.youtube.com/watch?v=5u_zHf_JtJg"
    },
    {
        "id": 61,
        "nome": "Stiff com Barra",
        "grupo_muscular": "Glúteos / Posterior da Coxa",
        "tipo": "Força",
        "equipamento": "Barra",
        "instrucoes": "Com a barra na frente das pernas, flexione os quadris e abaixe a barra até os joelhos, mantendo a coluna neutra.",
        "video": "https://www.youtube.com/watch?v=zZt5l5bXbhI"
    },
    {
        "id": 62,
        "nome": "Lunges com Halteres",
        "grupo_muscular": "Pernas / Glúteos",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Dê um passo à frente, mantendo o tronco reto, e retorne à posição inicial.",
        "video": "https://www.youtube.com/watch?v=U_0s89l_hk4"
    },
    {
        "id": 63,
        "nome": "Puxada Alta com Pegada Neutra",
        "grupo_muscular": "Costas",
        "tipo": "Força",
        "equipamento": "Máquina",
        "instrucoes": "Puxe a barra para baixo, com a pegada neutra, até a linha do peito.",
        "video": "https://www.youtube.com/watch?v=3eK1V_dzMGo"
    },
    {
        "id": 64,
        "nome": "Dumbbell Shoulder Press",
        "grupo_muscular": "Ombros",
        "tipo": "Força",
        "equipamento": "Halteres",
        "instrucoes": "Segure os halteres ao nível dos ombros e empurre-os para cima até os braços estarem totalmente estendidos.",
        "video": "https://www.youtube.com/watch?v=qEwKCR5JCog"
    }
]

console.log(exercicios);

exercicios.forEach(ex => {
    $('#treino').append()
});

$(document).ready(function () {
    $('.exercicio').on('click', function () {
        let detalhes = $(this).find('.detalhado');

        if (detalhes.is(':hidden'))
            detalhes.slideDown();
        else
            detalhes.slideUp();
        
        $('.exercicio .detalhado').not(detalhes).slideUp();
        $('.exercicio .chevron img').not(chevron).css('transform', 'rotate(-180deg)');
    });

    $('.treino-btn').on('click', function () {
        $('#treino h1').text($(this).text());
        $('#home').slideUp(700, 'easeInOutQuint');
    });
});

window.addEventListener('load', function () {
    history.pushState({ page: 1 }, '', '');

    // Escutamos o gesto de "voltar"
    window.addEventListener('popstate', function () {
        $('#home').slideDown(700, 'easeInOutQuint');
    });
});