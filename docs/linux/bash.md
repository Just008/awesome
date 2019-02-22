# Bash 相关的操作


![bash](http://md.laragh.top/vuepress/bash.png)

# bash 别名

> 用 bash 别名的原因就是一点：懒。 其实一定程度的懒还是能提高效率的
>
> 使用方式 `vim ~/.bashrc` 复制下面的内容粘贴到最底下。然后 `source ~/.bashrc` 如果你用的zsh，只需要把 `.bashrc` 换成  `.zshrc`

```shell
alias g='git'
alias gaa='git add -A'
alias gc='git checkout'
alias gcm='git commit -m '
alias gplm='git pull origin master'
alias gpl='git pull origin '
alias gpsm='git push origin master'
alias gps='git push origin '
alias gs='git status'
alias g:s='git stash'
alias gsa='git stash apply'
alias gr='git remote '
alias gra='git remote add '
alias grao='git remote add origin '

# zsh
alias v_zsh='vim ~/.zshrc'
alias s_zsh='source ~/.zshrc'

# laravel
alias pa='php artisan '
alias prl='php artisan route:list'
alias prc='php artisan route:clear'
alias pcc='php artisan config:clear'
alias pjk='php artisan jwt:generate'
alias pam='php artisan migrate'
alias pak='php artisan key:generate'
alias pat='php artisan tinker'
alias pas='php artisan serve'
alias pav='php artisan --version'
alias mfs='php artisan migrate:fresh --seed'

# composer
alias c='composer '
alias cda='composer dump-autoload'
alias ci='composer install'
alias civ='composer install -vvv'
alias cr='composer require'
alias cu='composer update'
alias cuv='composer update -vvv'

# yarn
alias y='yarn'
alias yi='yarn install'
alias yr='yarn run'

# npm
alias n='npm'
alias ni='npm install'
alias ncc='npm cache clean --force'
alias nu='npm update'
alias nrd='npm run dev'
alias nrd='npm run watch'
alias nrp='npm run production'

# linux
alias ..='cd ../'
alias r-f='rm -rf '

# docker
alias d='docker '
alias d:c='docker container' 
alias d-c='docker-compose '
alias dm='docker-machine '                                                                                                          
```