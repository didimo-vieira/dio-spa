import { ItemLista } from "../item-lista/item-lista";

export class ReceitasData {
  receitas: ItemLista[] = [
    {
      id: 0,
      titulo: 'Filet ao Molho Madeira',
      categoria: 'Carne',
      procedimento: '6 bifes de filé mignon\n1 vidro pequeno de champignon fatiado em lâminas finas\n4 colheres de sopa de manteiga\n1 cebola média picadinha\n2 tabletes de caldo de carne\n1 xícara de vinho tinto seco\n1 colher de amido de milho\n\nFrite os bifes em 2 colheres de manteiga e reserve.\nEm seguida refogue na manteiga a cebola, o champignon e os tabletes de carne.\nAcrescente o vinho e deixe ferver por uns 10 minutos.\nEm seguida dilua o amido de milho em 1/4 xícara de água e acrescente ao molho para engrossar.\nJunte os bifes, deixe por 5 minutos e apague o fogo.\nSirva em seguida.'
    },
    {
      id: 1,
      titulo: 'Lagosta Grelhada',
      categoria: 'Fruto do Mar',
      procedimento: '1 kg de lagosta média fresca\nMolho manteiga misturado com orégano\n\nFervente as lagostas até ficarem avermelhadas, depois corte as lagostas no sentido do comprimento.\nSepare em 2 metades e limpe bem em água corrente.\nQuando a lagosta estiver quase grelhada, vire as cascas para baixo e despeje o molho manteiga misturada com orégano sobre a carne.\nDeixe assar por mais um tempo até que a manteiga penetre bem na carne.\nSirva imediatamente.'
    },
    {
      id: 2,
      titulo: 'Strogonoff de Frango',
      categoria: 'Ave',
      procedimento: '3 peitos de frango cortados em cubos\n1 dente de alho picado\nsal e pimenta a gosto\n1 cebola picada\n2 colheres (sopa) de maionese\n1 colher de manteiga\n1/2 copo de ketchup\n1/3 copo de mostarda\n1 copo de cogumelos\n1 copo de creme de leite\nbatata palha a gosto\n\nEm uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.\nEm uma frigideira grande, derreta a manteiga e doure a cebola.\nJunte o frango temperado até que esteja dourado.\nAdicione os cogumelos, o ketchup e a mostarda.\nIncorpore o creme de leite e retire do fogo antes de ferver.\nSirva com arroz branco e batata palha.'
    },
    {
      id: 3,
      titulo: 'Lasanha',
      categoria: 'Massa',
      procedimento: '1 cebola picada\n500 g de carne moída\nsal a gosto\n1 caixa de molho de tomate\n\nRefogue a cebola em óleo e adicione a carne moída e o sal.\nAdicione o molho de tomate e ferva.\n\nEm outra panela, derreta a manteiga e adicione a farinha de trigo.\nMisture até que estejam bem incorporados e adicione o leite, a pimenta e o creme de leite.\n\nNo fundo de um refratário, coloque um pouco de molho bolonhesa.\nacima, a massa da lasanha, presunto, mussarela e o molho branco.\nRepita a operação até finalizar com o molho branco e queijo ralado.\nLeve ao forno médio por 20 minutos.'
    },
    {
      id: 4,
      titulo: 'Salada de Pepino',
      categoria: 'Salada',
      procedimento: '1 pepino japonês\n1 colher (sopa) de sal marinho ou himalaia\n3 colheres (sopa) de vinagre de arroz\n2 colheres (sopa) de açúcar (não use refinado)\n2 colheres (sopa) de gergelim branco e/ou preto\n\nLave bem e seque o pepino.\nUse um cortador ou faca para fatiar os pepinos bem fininhos.\nColoque os pepinos em um prato fundo e coloque o sal.\nMisture bem.\nOs pepinos vão desidratar, liberando muita água.\nTransfira os pepinos para um escorredor com um prato embaixo.\nDeixe por 15 minutos.\nCaso queira, toste o gergelim na frigideira para que esfrie até servir a salada.\nEm uma panela, coloque o açúcar, o vinagre e ligue em fogo baixo.\nDeixe aquecer até que o açúcar derreta e se misture ao vinagre, mas não deixe ferver.\nReserve e deixe esfriar.\nEnxágue os pepinos em água corrente para tirar o excesso de sal.\nEsprema bem com as mãos para tirar o excesso de água.\nSeque com um papel toalha antes de colocar os temperos.\nColoque os pepinos em uma saladeira funda e adicione o molho de vinagre.\nSe desejar, coloque algumas gotas de óleo de gergelim e pimenta-do-reino.\nFinalize a salada com o gergelim tostado.'
    },
    {
      id: 5,
      titulo: 'Brownie',
      categoria: 'Sobremesa',
      procedimento: '6 colheres (sopa) bem cheias, de margarina sem sal\n3/4 xícara (chá) achocolatado\n1/2 xícara (chá) chocolate em pó\n1 e 1/4 xícara (chá) farinha de trigo\n2 xícaras (chá) açúcar\n4 ovos\n2 pitadas de sal\n1 colheres (chá) de extrato ou essência de baunilha\n1 tablete de chocolate meio amargo picado em cubinhos\n1/2 xícara (chá) de nozes picadas ou castanhas de caju granuladas\n\nMisture os ovos e o açúcar.\nEm seguida, agregue todos os outros ingredientes até formar um creme uniforme.\nDespeje em uma assadeira, forrada com papel-manteiga e leve ao forno médio por 40 minutos.\nO brownie estará pronto quando a parte de cima estiver levemente corada e, ao se espetar um palito, ele esteja levemente úmido (devido ao chocolate derretido).\nCorte em quadrados ainda quente e sirva com uma bola de sorvete de creme, ou congele num saquinho para freezer.\nPara descongelar, coloque o brownie num prato de sobremesa e aqueça no micro-ondas, potência alta, por 1 minuto.'
    }
  ]

  getAll(): ItemLista[]{
    return this.receitas;
  }

  getById(id: number): ItemLista {
    return this.receitas.find(item => item.id === id);
  }
}