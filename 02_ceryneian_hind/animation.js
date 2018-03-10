const   chalk = require('chalk');
const   clear = require('clear');

function printTitle1() {
  console.log(
      chalk.white('------------------------------------------\n') +
      '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle2() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle3() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' + '\n' + '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle4() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.yellow('        +#+#+#+#+#+   +#+                     \n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' + '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle5() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.yellow('          +#+  +:+       +#+                  \n') +
      chalk.yellow('        +#+#+#+#+#+   +#+                     \n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle6() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.yellow('            +:+ +:+         +:+               \n') +
      chalk.yellow('          +#+  +:+       +#+                  \n') +
      chalk.yellow('        +#+#+#+#+#+   +#+                     \n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
}

function printTitle7() {
  console.log(
      chalk.white('------------------------------------------\n') +
      chalk.red('              :+:      :+:    :+:             \n') +
      chalk.yellow('            +:+ +:+         +:+               \n') +
      chalk.yellow('          +#+  +:+       +#+                  \n') +
      chalk.yellow('        +#+#+#+#+#+   +#+                     \n') +
      chalk.green('             #+#    #+#                       \n') +
      chalk.green('            ###   ########.fr                 \n') +
      '\n' + '\n' +
      chalk.white('          Created by: ckrommen               \n') +
      chalk.white('------------------------------------------\n')
  )
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

module.exports = {
  printAnim: function() {
    printTitle1()
    for (i = 0; i < 50000000; i++)
        continue;
    clear()
      printTitle2()
      for (i = 0; i < 50000000; i++)
        continue;
    clear()
    printTitle3()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle4()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle4()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle5()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle6()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle7()
    for (i = 0; i < 50000000; i++)
      continue;
    clear()
    printTitle()
}
}
