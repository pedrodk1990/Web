# Gerador de Senhas

## Descrição
> Cria senhas fortes e aleatórias de acordo com a configuração de requisitos básicos, comprimento, case-sensitive, números e símbolos.

## HTML

`<head>`
> Define a configuração padrão, o título do projeto e carrega o CSS próprio.

`<body>`
> Escreve o nome do projeto como título na página usando a tag `<h1>`, cria uma área para entrada de dados `<input>` referente ao comprimento da senha, uma caixa de escolha `<checkbox>` para inclusão de **letras minúsculas**, uma caixa de escolha `<checkbox>` para inclusão de **letras maiúsculas**, uma caixa de escolha `<checkbox>` para inclusão de **números**, uma caixa de escolha `<checkbox>` para inclusão de **símbolos** e um botão `<button>` para **gerar senha**. Define uma área `<div>` para exibir o resultado e carrega o JavaScript próprio.

## CSS
> A folha de estilos própria apenas define a **cor de fundo** da tela para `#f0f8ff`, a **fonte** como _Arial_ , a **cor do texto** para `#333`, *display* como flex, **conteúdo justificado** no centro, o **alinhamento dos itens** no centro, a **altura** para 100 viewport height, **margem** como 0 e define as classes 

>`.container` 
>>Com **alinhamento do texto** no centro, **cor de fundo** branco, **espaço de preenchimento** de 20 pixels, **raio da borda** de 10 pixels, **efeito de sombra** 4 pixels a direita, 20 pixels para baixo com a cor preta e opacidade em 20%, **largura** de 300 pixels. 

> `.result`
>> Com **quebra de linha ** em pontos arbitrários, **margem do topo** de 20 pixels, **tamanho da fonte** equivalente ao tamanho da fonte do elemento pai vezes 1.2 e **cor do texto** _#007bff_.

> Define todos os elementos `input[type="number"]`
>> Com **largura** em 100%, **espaço de preenchimento** de 8 pixels, **margem de fundo** de 10 pixels, **borda** de 1 pixel na cor _#ccc_ e **raio** de 5 pixels.

> Define todos os elementos `label`
Com **display** em caixa de bloco e **margem do topo e de fundo** de 10 pixels. 

> Define todos os elementos `button`
>> Com **espaço de preenchimento do topo e de fundo** de 10 pixels e **espaço de preencimento esquerdo e direito ** de 20 pixels, **cor de fundo** _#007bff_, **sem efeitos de borda** e **raio** de 5 pixels, **cor do texto** _white_, **pointeiro do mouse** tipo pointer, **efeito de transição** para a cor de fundo em 0.3 segundos.

> Define a ação do elemento `button:hover`
>> **Com cor de fundo** _#0056b3_.


## Funções Javascript

`generatePassword()`
> Coleta informações de configuração fornecidas pelo usuário para formar um conjunto de caracteres que será usado para gerar a senha. Antes de gerar a senha, o algoritmo verifica se o usuário selecionou pelo menos um tipo de caractere, para então selecionar aleatoriamente caracteres do conjunto previamente definido. Esse processo é repetido até que a senha atinja o comprimento desejado e exibe o resultado na tela.

## Melhorias
* Substituir `Math.random()` por `crypto.getRandomValues()` ou similar
* Implementar verificação de senhas existentes
* Implementar avaliação de força da senha