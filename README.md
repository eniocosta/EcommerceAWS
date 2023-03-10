# EcommerceAWS
Desenvolvimento do backend serveless de um sistema de ECommerce fictício utilizando TypeScript e AWS CDK;

____
### Gerenciamento de Produtos [WIP]:
 ![GerenciamentoProdutos](https://user-images.githubusercontent.com/9342074/216784531-d5f9f65f-9b14-489d-8905-ef1cb2be7acc.png)

 | Operação  | URL | Verbo HTTP |
| ------------- | ------------- |  :---:  |
| Listar todos os produtos  | /products  | **GET** |
| Buscar um produto pelo id  | /products/{id}  | **GET** |
| Criar um produto  | /products  | **POST** |
| Alterar um determinado produto  | /products/{id}  | **PUT** |
| Apagar um determinado produto  | /products/{id}  | **DELETE** |
____
- Gerenciamento de Pedidos:
- Geração de Eventos;
- Importação de notas fiscais;
- Auditoria;
- Alarmes;
- Autenticação de usuários;


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
