<<<<<<< HEAD
# Coding-challenge
Solutions to the coding challenges by John Crickett: https://codingchallenges.fyi/
=======
# build-your-own-wc

![alt text](images/your_own_wc_ccwc.png)

![GitHub file size in bytes](https://img.shields.io/github/size/VedantGonnade/build-your-own-wc/ccwc%2Findex.ts) ![Gitea Last Commit (branch)](https://img.shields.io/github/last-commit/VedantGonnade/build-your-own-wc/main)

### This project is my version of the Unix command line tool : `wc` implemented in Typescript

- Part of the coding challenge: https://codingchallenges.fyi/challenges/challenge-wc
- Tool is called as `ccwc`

# Setup

1. Clone the repo:

`git@github.com:VedantGonnade/build-your-own-wc.git`

- use http link if you are comfortable with http.

2. Run setup.sh file

`./setup.sh`

- it will prompt for your sudo password since the setup file links `index.ts` file to `ccwc` command. Please provide your sudo password and the ccwc command will be ready to use

# Commands

Tool can be used in two ways: either by passing a filename or via piping through standard input (stdin).

- `-c` : output the byte size of the text.

`$ ccwc -c <filename>`

When passed through stdin:

`$ cat <filename> | ccwc -c`

- `-l` : output the line count of the text.

`$ ccwc -l <filename>`

- `-w` : output the word count of the text.

`$ ccwc -w <filename>`

- `-m` : output the character count of the text.

`$ ccwc -m <filename>`

- when no flags are passed: outputs word, line, byte size count of the text.

`$ ccwc <filename>`

# Notes:

- Make sure to use LF line endings in setup.sh if you encounter issues on Unix-like systems.
- This tool is implemented in TypeScript and requires ts-node to run. The setup script installs necessary dependencies and creates a symbolic link to make the ccwc command available globally.
>>>>>>> r1remote/main
