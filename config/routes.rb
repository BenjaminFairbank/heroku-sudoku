Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

    get "/home", to: "homes#index"
    get "/play", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
