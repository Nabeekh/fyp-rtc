json.users @users do |user|
	json.id user.id
	json.email user.email
	json.userName user.userName
	json.lastLogin user.last_sign_in_at
	json.city user.city
	json.addressLine user.addressLine
	json.mobile user.mobile
	json.region user.region
	json.password user.encrypted_password
end