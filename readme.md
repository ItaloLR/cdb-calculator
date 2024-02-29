# Cálculo de CDB - B3


## Configurações para o projeto
- Angular 17.2.1: (https://www.npmjs.com/package/@angular/cli/v/17.2.1)
- .NET SDK 8.0.2: (https://dotnet.microsoft.com/pt-br/download)

## Tecnologias Utilizadas
- Angular
- C#
- TypeScript
- Sass

## Instalação
Clone este repositório: 
```bash
  git clone https://github.com/ItaloLR/cdb-calculator.git

  cd cdb-calculator
```

## Observação Importante
Para que o frontend possa funcionar, executar o cálculo do CDB, assim como os testes, é preciso primeiro executar a API no backend. O frontend está consumindo a API. 

## Frontend

Instale as dependências do Angular: 
```bash
  cd .\frontend\

  npm install 
```

Para executar o projeto Angular:
```bash
  cd  .\frontend\

  ng serve 
```

Rode os testes do Angular: 
```bash
  cd .\frontend\

  ng test
```

## Backend 

Instale as dependências do .NET, rodando os seguintes comandos: 
```bash
  cd .\backend\B3.Api\

  dotnet restore 
  dotnet build 
```

Para executar o projeto .NET:
```bash
  cd .\backend\B3.Api\

  dotnet watch run 
```

Rode os testes do .NET, com os seguintes comandos: 
```bash
  cd .\backend\B3.Domain.Test\

  dotnet test --collect:"Code Coverage"
```
