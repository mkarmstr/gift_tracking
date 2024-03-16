Rails.application.routes.draw do
  root 'friends#index'

  resources :friends do
    resources :gifts, only: [:create, :destroy]
  end
end