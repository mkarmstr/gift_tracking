class Friend < ApplicationRecord
    has_many :gifts, dependent: :destroy
    accepts_nested_attributes_for :gifts, allow_destroy: true, reject_if: proc { |attributes| attributes['name'].blank? }
   
    validates :name, presence: true
    validates :birthday, presence: true
  end
  