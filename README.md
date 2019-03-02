# JMeter Node App - Using TDD

Application based on the JMeter features for Load and Performance Tests. For this project, I had two goals: To develop a simple application that uses (limited) resources similar to JMeter. The features developed were: HTTPCookieManager, HTTPRequest, RegularExpressionExtractor and ThreadGroup.

The site used for security, load and performance testing was Redmine.org (a site exclusively for testing). The system part that pertains to JMeter has been separated into a "jmeter" folder and the main user group class (ThreadGroupRedmine.ts) is in the "thread" folder.

It was also necessary to create a user and a class of Client to be used in the process (see more in git).

To run the tests in the application, the [Mocha](https://mochajs.org/) was used.


## Run the Application
Type the following command in the terminal:
	
```bash
npm start
```

Process Tree:

![alt text](https://github.com/Wpdas/JMeter-Node-using-TDD/blob/master/imgs/JMeter%20Node%20(TypeScript).png?raw=true)

## Executar Testes (Mocha)
Digite o seguinte comando no terminal para executar os testes no aplicativo.
	
```bash
npm test
```

Expected result:

![alt text](https://github.com/Wpdas/JMeter-Node-using-TDD/blob/master/imgs/TDD%20Test.png?raw=true)
