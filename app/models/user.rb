class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :articles
  has_and_belongs_to_many :roles, :join_table => :users_roles
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end