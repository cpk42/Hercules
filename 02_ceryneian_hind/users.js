const   http = require('http');
const   fs = require('fs');
const   prompt = require('prompt')
const   clear = require('clear');
const   chalk = require('chalk');
const   request	= require('superagent');
require('dotenv').config();

var config = {
	uid: process.env.FT_UID,
	secret: process.env.FT_SECRET,
	grant_type: 'client_credentials'
}

function printTitle() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.red('                :::      ::::::::             \n') +
      chalk.red('              :+:      :+:    :+:             \n') +
      chalk.yellow('            +:+ +:+         +:+               \n') +
      chalk.yellow('          +#+  +:+       +#+                  \n') +
      chalk.yellow('        +#+#+#+#+#+   +#+                     \n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function getFile(token) {
    var arr = []

    console.log(chalk.magenta('Please provide a valid filename with users\n------------------------------------------\n'))
    prompt.get('file', function(err, result) {
        if (err) {
            console.log(chalk.red('          Invalid Prompt\n------------------------------------------\n'))
        }
        else {
            var file = result.file
            if (file) {
                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) {
                        console.log(chalk.red('\n            Invalid File: ' + file + '\n------------------------------------------\n'))
                        clear()
                        printTitle()
                        getFile(token)
                    }
                    else {
                        var names = data.split('\n')
                        clear()
                        printTitle()
                        console.log(chalk.yellow('Searching through ' + chalk.magenta(file)) + '\n')
                        for (i = 0; i < names.length; i++) {
                            if (names[i])
                                findUser(names[i], token)
                            else
                                continue
                        }
                    }
                }
            )}
            else {
                console.log(chalk.red('            Invalid File: ' + file + '\n------------------------------------------\n'))
                clear()
                printTitle()
                getFile(token)
            }
        }
    })
}

function oauth2() {
    console.log(chalk.yellow('         Authenticating Token...\n------------------------------------------\n'))
    return new Promise ((resolve, reject) => {
        request
            .post('https://api.intra.42.fr/oauth/token')
            .send(
                {
                    grant_type: config.grant_type,
                    client_id: config.uid,
                    client_secret: config.secret
                }
            )
            .then((res) => {
                    console.log(chalk.green('       Successfully Authenticated\n------------------------------------------\n'))
                    resolve(res.body);
                }
            )
            .catch((err) => {
                console.log(chalk.red('             Rejected Token\n------------------------------------------\n'))
                reject(err)
            })
    });
}

function findUser(elem, token) {
    return (
    request
        .get('https://api.intra.42.fr/v2/users/' + elem)
        .send({ access_token: token.access_token })
        .then((res) => {
			var level = (res.body.cursus_users[0].level != null) ? res.body.cursus_users[0].level : "No Level"
			var grade = (res.body.cursus_users[0].grade != null) ? res.body.cursus_users[0].grade : "No Grade"
            if (!elem)
                console.log(chalk.red('User not Found') + ' ' + chalk.cyan(elem))// + '\n------------------\n'
            else{
				console.log('|--- ' + chalk.cyan.bold(elem) + ': ' + chalk.green(res.body.location ? res.body.location : "Not Available"));// + chalk.green('\n-------------------\n')
				console.log('|------  ' + chalk.yellow('Level ') + chalk.magenta(level))
				console.log('|------  ' + chalk.yellow('Grade ') + chalk.magenta(grade))
			}
	    })
        .catch((err) => {
            console.log(chalk.red('Failed to find user: ') + chalk.cyan.underline.bold(elem))// + chalk.red('\n------------------------------\n')
        })
    );
}

function main() {
    clear()
    printTitle()
    oauth2()
    .then((token) => {
        names = getFile(token)
    })
    .catch((err) => {
        console.log(chalk.red('         Error in authentication\n------------------------------------------\n'))
    })
}

main()
