# Notas

## Descrição
> Ajuda na organização das atividades e compromissos do dia a dia. Consiste em uma lista onde você pode adicionar, editar e excluir notas e lembretes.

OBS: Armazenamento local

## HTML

`<head>`
> Define a configuração padrão, o título do projeto e carrega o CSS próprio e o CSS do bootstrap 4.5.2 através da cdn: https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css.

`<body>`
> Escreve o nome do projeto como título na página usando a tag `<h1>`, cria uma área de texto `<textArea>` para a descrição da nota, uma caixa de seleção `<select>` **Categorias** e um botão `<button>` **Adicionar Nota**. Define uma área de filtragem de notas usando os elementos `<input>` para a descrição da nota e `<select>` para a categoria das notas e uma área para listagem das notas registradas `<div>` e carrega o JavaScript próprio. Os itens da lista são definidos via Javascript em tempo de execução.

## CSS
> A folha de estilos própria apenas define a cor de fundo da tela para `#f8f9fa`, centraliza o texto de todos os elementos `<h1>`, define as classes 

>`.note` 
>>Com **cor de fundo** _#ffffff_, **borda** de 1 pixel na cor _#dee2e6_ solida e **raio** de 5 pixels, o **espaço de preenchimento** de 10 pixels e a **margem de fundo** com 10 pixels. 

> `.note-actions`
>> Com **display** flex e **conteúdo justificado** flex-end.

> Define o seletor de irmãos `.note-actions button:nth-child(1)`
>> Com 5 pixels de **margem** à direita.

> Define o seletor de irmãos `.note-actions button:nth-child(2)`
>> Com 5 pixels de **margem** à esquerda.

> O restante da estilização é feita com o bootstrap via cdn, como citado acima.

## Funções Javascript

`renderNotes()`
> Cria e adiciona no DOM os elementos HTML atribuindo as classes CSS e eventos Javascript exclusivos para edição e exclusão da nota de acordo com o filtro aplicado pelo usuário. Caso o usuário não filtre, exibe todas as notas registradas.
>> Os eventos `input` da caixa de texto referente ao filtro por descrição e `change` referente ao filtro por categoria foram utilizados para promover uma atualização mais rápida e comoda para o usuário.

`addNote()`
> Registra uma nova nota através das entradas de dados feitas pelo usuário nos campos `<input>` referente a descrição da nota e `<select>` referente a categoria da nota. Após o registro da nova nota, a função `renderNotes()` é chamada para adicionar a nova nota no DOM.

`editNote(index)`
> **parâmetro index**- A posição da nota no Array, equivalente a identificação de registro de um banco de dados.

> Usa o prompt como entrada de dados para o usuário editar a descrição da nota e em seguida a categoria da nota, sendo possível informar uma categoria que não existe no elemento `<select>` referente a categoria. Caso os valores de entrada sejam diferente de `null`, armazena as novas informações e chama a função `renderNotes()` para atualizar a lista DOM. 

`deleteNote(index)`
> **parâmetro index**- A posição da nota no Array, equivalente a identificação de registro de um banco de dados.

> Usa o prompt como entrada de dados para o usuário confirmar que deseja realmente excluir a nota escolhida. Caso o usuário confirme, remove a nota, atualiza a lista e chama a função `renderNotes()` para atualizar a lista DOM.

## Melhorias
* Implementar banco de dados e a lógica backend
* Exportar notas em formatos como CSV, Excel, PDF, etc
* Gerar relatórios