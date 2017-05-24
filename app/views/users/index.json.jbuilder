json.users @users do |user|
	json.id user.id
	json.email user.email
	json.userName user.userName
	json.lastLogin user.last_sign_in_at
end