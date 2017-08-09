/**
 * Deployment script for FlightDelay
 *
 * @author Christoph Mussenbrock
 * @description Initial Migration 
 * @copyright (c) 2017 etherisc GmbH
 * 
 */

/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

const Migrations = artifacts.require('Migrations.sol');

module.exports = deployer => deployer.deploy(Migrations);
