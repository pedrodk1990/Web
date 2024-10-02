# To-Do List

## Descrição
> Ajuda na organização das atividades e compromissos do dia a dia. Consiste em uma lista onde você pode adicionar e excluir as tarefas que precisa realizar.

OBS: Armazenamento local

## HTML

`<head>`
> Define a configuração padrão, o título do projeto e carrega o CSS próprio e o CSS do bootstrap 4.5.2 através da cdn: https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css.

`<body>`
> Escreve o nome do projeto como título na página usando a tag `<h1>`, define um formulário `<form>` com os campos de entradas de dados `<input>` **Nova tarefa** (requerido), uma caixa de seleção `<select>` **Categorias** e um botão `<button>` **Adicionar Tarefa**. Define um campo de entradas de dados `<input>` destinado a busca de tarefas e uma área para listagem das tarefas registradas `<ul>` e carrega o JavaScript próprio. Os itens da lista são definidos via Javascript em tempo de execução.

## CSS
> A folha de estilos própria apenas define a cor de fundo da tela para `#f8f9fa`. Toda a estilização é feita com o bootstrap via cdn, como citado acima.

## Funções Javascript

`loadTasks()`
> Carrega as tarefas armazenadas localmente e cria o elemento DOM.

`addTask(e)`
> **parâmetro e**- evento do botão.

> `const task = { id:Date.now(), name:taskInput.value, category: categoryInput.value }`

> Pega os inputs dos campos de tarefa e de categoria, cria um objeto `task`, carrega a lista de tarefas armazenada localmente ou caso ela não exista cria uma lista vazia, adiciona o objeto `task` e armazena esta lista  localmente, convertida para o formato JSON. Cria o DOM correspondente e atribui valores padrão para os campos de input tarefa e categoria.

`createTaskElement(task)`
> **parâmetro task**- objeto representante de uma tarefa: **id**- identificação do registro no local de armazenamento, no caso o retorno da função `Date.now()`. **name**- o nome descritivo da tarefa, entrada de dados pelo usuário. **category**- a categoria da tarefa, entrada de dados pelo usuário.

> Cria os elementos HTML com suas atribuições de classes CSS e funções Javascript, utilizando as tags `<li>`, `<span>` e `<button>`. 

`deleteTask(id)`
> **parâmetro id**- O identificador do registro no armazenamento local.

> Carrega a lista armazenada localmente, caso a lista não exista é atribuida uma lista vazia. Filtra a lista, retirando todos os registros com o `id` passado pelo parâmetro da função, salva a lista sem os registros que foram encontrados e remove o DOM correspondente.

`searchTasks()`
> Pega o input do usuário no campo de busca, carrega a lista armazenada localmente, caso a lista não exista é atribuida uma lista vazia. Filtra a lista usando os nomes descritivos que incluam os termos do filtro.

## Melhorias
* Filtrar por categoria
* Filtrar por data
* Implementar banco de dados e a lógica backend
* Implementar função de concluir tarefas