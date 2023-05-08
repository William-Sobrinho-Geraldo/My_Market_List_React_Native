# My market List
## Resumo

Trate-se de uma refatoração do aplicativo My market list que anteriormente era desenvolvido em Android Nativo e essa versão será desenvolvida em modelo híbrido com React Native.

## Detalhamento

Esse aplicativo está sendo desenvolvido por mim, em conjunto com dois amigos de faculdade sendo eles : [Diogo Agra](https://github.com/diogoalexandria), responsável por organizar os dados dos mercados no servidor e [Tatiane Correa](https://github.com/taticorrea) que faz o scrapping dos dados e disponibiliza para o Diogo. 

Minha função nesse projeto é estruturar a interface do App e a lógica de comunicação com o servidor via API para buscar e somar a quantidade de itens da lista de compras do cliente e comparar o valor total dessa lista com diferentes supermercados. 

Por questões de dificuldades no scrapping de dados, talvez por desinteresse dos próprios supermercados, decidimos focar em lançar a primeira versão do App apenas com 1 mercado e depois amplicar com mais parceiros e outras features.

Esse projeto tem sido um grande desafio pra mim, pois estou reescrevendo todo o código em React Native. Segue abaixo um gif da organização inicial de telas e listas de exemplo 


## Vídeo ilustrativo do projeto : 

<div align="center">
<video src = "https://user-images.githubusercontent.com/111225477/236832818-36bf6834-ef46-498b-be9a-8b06e1415cda.mp4
" width = "200px" >
</div>

## Conceitos aprendidos: 
- Criação de FlatLists para os mercados e os Itens
- Utilização de um TextInput para filtrar produtos pelo nome
- Criação da TabBar para navegação entre as telas dos mercados e a de itens
- Criação de botões TouchableOpacity para os mercados e a adição de cada item
- Estruturação do projeto com mocks exemplificativos
- Separação da pasta de rotas para facilitar a manutenção do projeto
- Inclusão de icones vetorias para melhorar a aparência e usabilidade do app


## Próximas etapas - Loading ... 
- Corrigir o tamanho das células para melhor acomodar o nome dos itens 
- Consumir a API do servidor para mostrar itens disponíveis a serem adicionados
- Buscar os itens escolhidos pelo cliente no servidor e fazer o somatório
