Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/' => 'homes#index'
  get '/pricing' => 'homes#index'
  get '/gallery' => 'homes#index'
  get '/services' => 'homes#index'
  get '/client-login' => 'homes#index'

  get '/services#local' => 'homes#index'
  get '/services#interstate' => 'homes#index'
  get '/services#packing' => 'homes#index'
  get '/services#storage' => 'homes#index'


end
