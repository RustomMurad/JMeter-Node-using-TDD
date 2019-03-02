//https://www.npmjs.com/package/mocha-typescript

/**
 * Test-driven development.
 *
 * Simple application that aims to connect to the test site
 * redmine.org, log in, access a task, and finally logout.
 *
 * The tests performed here were first made through the tool
 * JMeter testing
 *
 * To test the classes use the command in the terminal: npm test
 *
 * To run the application, use the command in the terminal: npm start
 */

import { User } from "./modules/User";
import { Client } from "./modules/jmeter/Client";
import { ThreadGroupRedmine } from "./modules/thread/ThreadGroupRedmine";

export default class Index {

  //User
  private user:User;

  //Client
  private client:Client;

  //ThreadGroup
  private thredGroup:ThreadGroupRedmine;

  constructor(){

    //Create User
    this.user = new User('Wpdas', '123456');

    //Create Client
    this.client = new Client('www.redmine.org');

    //Create a ThreadGroup
    this.thredGroup = new ThreadGroupRedmine(this.user, this.client);

    //Init
    this.thredGroup.autoStartSquence();
  }
}

var app:Index = new Index();
