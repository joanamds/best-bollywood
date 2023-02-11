const movies = [ 
    {
    title: 'Dilwale Dulhania Le Jayenge',
    poster: 'https://images.justwatch.com/poster/241790037/s718/dilwale-dulhania-le-jayenge.%7Bformat%7D',
    releaseYear: '1995', 
    directedBy: 'Aditya Chopra',
    sinopsis: 'Em uma viagem, uma jovem se apaixona por um rapaz. Porém, o pai dela é contra esta relação.',
    runningTime: '189min',
    watchNow: 'https://www.justwatch.com/br/filme/dilwale-dulhania-le-jayenge',
    },
    {
    title: 'Kuch Kuch Hota Hai',
    poster: 'https://images.justwatch.com/poster/240183494/s592/kuch-kuch-hotaa-hai',
    releaseYear: '1998', 
    directedBy: 'Karan Johar',
    sinopsis: 'Uma menina recebe uma carta deixada por sua falecida mãe no qual ela lhe pede auxílio para ajudar o seu pai a encontrar um novo amor.',
    runningTime: '185min', 
    watchNow: 'https://www.justwatch.com/br/filme/kuch-kuch-hotaa-hai',
    },
    {
    title: 'Kabhie Khushi Kabhie Gham',
    poster: 'https://images.justwatch.com/poster/240714410/s592/kabhi-khushi-kabhie-gham',
    releaseYear: '2001', 
    directedBy: 'Karan Johar',
    sinopsis: 'Um homem de uma família rica da sociedade indiana se apaixona por uma mulher de uma classe menos abastada. A sua família é contra a relação.',
    runningTime: '210min', 
    watchNow: 'https://www.justwatch.com/br/filme/kabhi-khushi-kabhie-gham',
    },
    {
    title: 'Kal Ho Naa Ho',
    poster: 'https://images.justwatch.com/poster/137434816/s592/kal-ho-naa-ho',
    releaseYear: '2003', 
    directedBy: 'Karan Johar',
    sinopsis: 'Uma jovem de uma comunidade indiana em Nova York se apaixona por seu vizinho. Mas mal sabe ela os segredos que ele guarda.',
    runningTime: '187min', 
    watchNow: 'https://www.justwatch.com/br/filme/kl-ho-naa-ho',
    },
    {
    title: 'Taare Zameen Par',
    poster: 'https://images.justwatch.com/poster/11010313/s718/taare-zameen-par.%7Bformat%7D',
    releaseYear: '2007', 
    directedBy: 'Aamir Khan, Amole Gupte',
    sinopsis: 'Um professor de artes cria uma amizade sincera e acolhedora com uma criança que tem dificuldades para se enturmar.',
    runningTime: '165min', 
    watchNow: 'https://www.justwatch.com/br/filme/somos-todos-diferentes',
    },
    {
    title: 'Rab Ne Bana Di Jodi',
    poster: 'https://images.justwatch.com/poster/11080047/s718/rab-ne-bana-di-jodi.%7Bformat%7D',
    releaseYear: '2008', 
    directedBy: 'Aditya Chopra',
    sinopsis: 'Um homem se casa de forma arranjada com uma mulher e agora tem que provar para ela que ele é capaz de ser o seu homem dos sonhos.',
    runningTime: '164min', 
        watchNow: 'https://www.justwatch.com/br/filme/rab-ne-bana-di-jodi',
    },
    {
    title: 'My Name Is Khan',
    poster: 'https://images.justwatch.com/poster/239956045/s592/meu-nome-e-khan',
    releaseYear: '2010', 
    directedBy: 'Karan Johar',
    sinopsis: 'Um homem muçulmano com Síndrome de Asperger que vive nos Estados Unidos começa a sofrer preconceito após os ataques de 11 de setembro.',
    runningTime: '161min', 
    watchNow: 'https://www.justwatch.com/br/filme/meu-nome-e-khan',
    },
    {
    title: 'Barfi!',
    poster: 'https://images.justwatch.com/poster/8840546/s592/barfi',
    releaseYear: '2012', 
    directedBy: 'Anurag Basu',
    sinopsis: 'Um homem surdo e uma mulher autista vivem uma relação linda de amizade, carinho e companheirismo.',
    runningTime: '150min', 
    watchNow: 'https://www.justwatch.com/br/filme/barfi',
    },
    {
    title: 'PK',
    poster: 'https://images.justwatch.com/poster/221303288/s592/pk',
    releaseYear: '2014', 
    directedBy: 'Rajkumar Hirani',
    sinopsis: 'Um alienígena ao entrar na terra perde a chave de sua nave e não tem mais como voltar para casa. Ao pedir ajuda dizem para ele pedir ajuda a Deus. Mas quem é Deus?',
    runningTime: '152min', 
    watchNow: 'https://www.justwatch.com/br/filme/pk',
    },
    {
    title: '2 States',
    poster: 'https://images.justwatch.com/poster/8812077/s592/2-states',
    releaseYear: '2014', 
    directedBy: 'Abhishek Verman',
    sinopsis: 'Dois jovens se apaixonam durante a faculdade e resolvem se casar. Porém, eles tem que enfrentar suas famílias que são de culturas opostas',
    runningTime: '152min', 
    watchNow: 'https://www.justwatch.com/br/filme/2-states',
    },
    {
    title: 'Ek Ladki Ko Dekha Toh Aisa Laga',
    poster: 'https://images.justwatch.com/poster/141648346/s592/ek-ladki-ko-dekha-toh-aisa-laga',
    releaseYear: '2019', 
    directedBy: 'Shelly Chopra Dhar',
    sinopsis: 'Uma jovem indiana quer provar para o seu pai que merece o seu amor pois ele não aceita a forma dela amar.',
    runningTime: '120min', 
    watchNow: 'https://www.justwatch.com/br/filme/ek-ladki-ko-dekha-toh-aisa-laga',
    },
    {
    title: 'RRR',
    poster: 'https://images.justwatch.com/poster/302244512/s592/raudrn-rnnn-rudhirn',
    releaseYear: '2022', 
    directedBy: 'S. S. Rajamouli',
    sinopsis: 'O filme se passa na Índia antes de sua independência. Conta a história de dois homens indianos e o que eles enfrentam  durante a colonização cruel e violenta da Inglaterra.',
    runningTime: '182min', 
    watchNow: 'https://www.justwatch.com/br/filme/raudrn-rnnn-rudhirn',
    },
];

export default movies;