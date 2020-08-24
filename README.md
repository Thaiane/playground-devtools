<h1 align="center">Playground DevTools </h1>
<p>
  <a href="https://twitter.com/ThaiiBraga" target="_blank">
    <img alt="Twitter: ThaiiBraga" src="https://img.shields.io/twitter/follow/ThaiiBraga.svg?style=social" />
  </a>
</p>

## Resumo e Dicas
---


#### Console

* Atalho para abrir o console é `Cmd` + `J`;
* Existem vários tipos de console: 
    * `console.log`
    * `console.error`
    * `console.warn`
    * `console.assert`
    * `console.group` e `console.groupEnd`
    * `console.table`
    
* A variável $ guarda um histórico dos elementos que foram alterados no DOM e podemos utilizar até o $4 (5 elementos);

```
$1
   <header class="cabecalho container">_</header>
```

* Podemos buscar um elemento usando `$$("form)`. Esse função funciona como um `document.querySelectorAll("form")` retornando um array;
* Podemos usar também o `$("form")` e nesse caso funciona como o `document.querySelector("form")`.
* Utilizando o `$$` para buscar todos os input;
* Use o `getEventListeners(document)` para buscar quais eventos temos associados a algo;
* Na aba source, temos `scope`, onde conseguimos ver as variáveis do sistema nos escopos: local, closure e global.
    * Local: variáveis com escopo apenas local.
    * Closure: São variáveis e funções que existem apenas ligadas em um contexto. Quando foram criadas, por exemplo, foram associadas
    a um `EventListeners` e apenas para ele que ela existe. Não consegue ser acessada de forma local nem global.
    * Global: o Window` faz parte do **DOM** que serve para modelar o _browser_ e que é parte do escopo global do navegador. 
    * Em `Network`, existe a opção ``no throttling`. Ela permite a realização de emulação com diferentes tipos de Internet.

## Referências
* [Curso Chrome DevTools](https://cursos.alura.com.br/course/chrome-devtools) do [Alura](https://www.alura.com.br/)

## Autora

👤 **Thaiane**

* Website: thaiane.github.io
* Twitter: [@ThaiiBraga](https://twitter.com/ThaiiBraga)
* Github: [@Thaiane](https://github.com/Thaiane)
* LinkedIn: [@thaianefbraga](https://linkedin.com/in/thaianefbraga)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_