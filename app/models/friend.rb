class Friend < ApplicationRecord
    has_many :gifts, dependent: :destroy
    
    validates :name, presence: true
    validates :birthday, presence: true
  end
  