# Calculadora divertida

## Descrição
> Cria uma interface de uma calculadora simples em HTML, que é estilizada com CSS e possui funcionalidade implementada em JavaScript.

## HTML

`<head>`
> Define a configuração padrão, o título do projeto e carrega o CSS próprio.

`<body>`
> A calculadora é envolvida em um elemento `<div>` com a classe **.calculator**, que serve como contêiner. Um elemento `<input>` exibe os números e resultados, desabilitado para evitar edição direta pelo usuário. A estrutura da calculadora é organizada em linhas e colunas usando vários elementos `<div>` para agrupar os botões.

> Cada botão é um elemento `<button>` que, quando clicado, chama uma função JavaScript. Os botões incluem números, operadores matemáticos, um botão de ponto flutuante, um botão de igual, e um botão de limpar.
Os botões de operação e número usam onclick para chamar funções específicas que adicionam o valor do botão ao campo de exibição, limpa o campo de exibição e calcula e exibe o resultado da expressão matemática.

## CSS
> A folha de estilos própria centraliza a calculadora na tela com um fundo amarelo vibrante. Ele aplica um fundo de imagem, bordas arredondadas e sombras à calculadora. O display e os botões têm um design amigável e colorido, com diferentes cores para botões de números, operações e funções especiais, criando uma interface visualmente atraente e intuitiva para os usuários.

## Funções Javascript

`appendToDisplay(value)`
>**parâmetro value**- valor da tecla da calculadora

> Concatena os valores digitados e exibe no display. Caso exista um ponto flutuante, impede que outro seja concatenado

`clearDisplay()`
> Define o valor da tela de display como vazio.

`calculateResult()`
> Calcula o resultado da expressão escrita no display da calculadora.

## Melhorias
* Substituir `eval()` por funções matemáticas pré-definidas
* Calcular área de figuras geométricas
* Calcular fórmulas matemáticas