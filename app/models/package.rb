class Package < ApplicationRecord
  belongs_to :user
  has_one :outcome
end
