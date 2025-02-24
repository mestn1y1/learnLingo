export default function (plop) {
  plop.setGenerator("component", {
    description: "Создать React-компонент",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите название компонента:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.hbs", // Указываем .jsx шаблон
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component.module.hbs", // Если CSS всё-таки остаётся в hbs
      },
    ],
  });
}
