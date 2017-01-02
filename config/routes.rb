Rails.application.routes.draw do
  devise_for :users
  resources :articles do
  	resources :comments do
  	end
  end
  resources :replies

  root 'welcome#index'
end
