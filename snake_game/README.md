# Snake

## Descrição
> Jogo popular do final dos anos 90. É um jogo que ficou conhecido por diversas versões cuja versão inicial começou com o jogo Blockade de 1976, sendo feitas várias imitações em vídeo-games e computadores. O jogo foi lançado para celulares Nokia em 1998 e se tornou popular.

## HTML

`<head>`
> Define a configuração padrão, o título do projeto e carrega o CSS próprio e o CSS do bootstrap 4.5.2 através da cdn: https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css.

`<body>`
> Cria um elemento `<canvas>` para executar o jogo através de atualizações e posicionamento dos elementos gráficos e um placar marcando **Pontuação** e **Tempo**.

## CSS
> A folha de estilos própria apenas define a cor de fundo da tela para `#f8f9fa`. Toda a estilização é feita com o bootstrap via cdn, como citado acima.

## Funções Javascript

`direction(d)`
> **parâmetro d**- direção de movimento.

> Define uma flag para a direção de movimento, seguindo a logica: se vai para a esquerda não pode ir para direita logo em seguida e vice-versa. Se vai para cima não pode ir para baixo logo em seguida e vice-versa.

`collision(head, array)`
> **parâmetro head**- objeto que referencia a posição x e y da primeira peça da composição da cobra. **parâmetro array**- vetor das referencias das posições x e y de todas as peças da composição da cobra.

> Verifica se a posição x e y de cada uma das peças da composição da cobra é igual a posição x e y da primeira peça da composição da cobra, validando a colisão.


`draw()`
> Desenha a tela do jogo, a cobra e a comida, atualiza a tela para promover o efeito de movimento. Utiliza o método `Array.prototype.pop()` para manter o tamanho da cobra enquanto não pegar nenhuma comida e o método `Array.prototype.unshift()` para aumentar o tamanho da cobra quando pegar alguma comida. E verifica se houve alguma colisão nos limites da tela de jogo com o método `collision(head, array)` descrito acima.

`startTimer()`
> Inicia a contagem do tempo de jogo.

## Melhorias
* Adicionar ranking
* Adicionar vidas
* Adicionar níveis
* Adicionar chefões
