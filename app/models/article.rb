class Article < ApplicationRecord
	resourcify
	has_many :comments, dependent: :destroy
	belongs_to :user, optional: true
	validates :title, presence: true,length: {in: 5..30 }
  	validates :text, presence: true, length: {in: 25..500}
end