class Article < ApplicationRecord
	validates :title, presence: true,length: {in: 5..30 }
  	validates :text, presence: true, length: {in: 25..500}
end