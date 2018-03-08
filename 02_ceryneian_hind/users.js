var     http = require('http');
var     fs = require('fs');
var     prompt = require('prompt')
const   chalk = require('chalk');
const   request	= require('superagent');
require('dotenv').config();

var config = {
	uid: process.env.UID,
	secret: process.env.SECRET,
	grant_type: 'client_credentials'
}

function getFile(token) {
    var arr = []

    console.log(chalk.magenta('Please provide a valid filename with users\n------------------------------------------\n'))
    prompt.get('file', function(err, result) {
        if (err) {
            console.log(chalk.red('Invalid Prompt\n-----------------\n'))
        }
        else {
            var file = result.file
            if (file) {
                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) {
                        console.log(chalk.red('\nInvalid File: ' + file + '\n-------------------\n'))
                        getFile(token)
                    }
                    else {
                        var names = data.split('\n')
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
                console.log(chalk.red('Invalid File: ' + file + '\n----------------\n'))
                getFile(token)
            }
        }
    })
}

function oauth2() {
    console.log(chalk.yellow('Authenticating Token...\n-----------------------\n'))
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
                    console.log(chalk.green('Successfully Authenticated\n--------------------------\n'))
                    resolve(res.body);
                }
            )
            .catch((err) => {
                console.log(chalk.red('Rejected Token\n--------------\n'))
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
            if (!elem)
                console.log(chalk.red('\nUser not Found') + ' ' + chalk.cyan(elem) + '\n------------------\n')
            else
                console.log('\n' + chalk.cyan(elem) + ': ' + chalk.green(res.body.location ? res.body.location : "Not Available") + chalk.green('\n-------------------\n'));
        })
        .catch((err) => {
            console.log(chalk.red('\nFailed to find user: ') + chalk.cyan(elem) + chalk.red('\n------------------------------\n'))
        })
    );
}

function main() {
    oauth2()
    .then((token) => {
        names = getFile(token)
    })
    .catch((err) => {
        console.log(err)
        console.log(chalk.red('Error in authentication\n-----------------------\n'))
    })
}

main()
