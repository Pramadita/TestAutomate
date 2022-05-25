Given (/^user login with akun admin/$) do
    DataHelper.new('user')
end

When (/^user get all product/$) do
    RestClient.get 'https://fakestoreapi.com/products'
end

When (/^user get product categories/$) do
     RestClient.get 'https://fakestoreapi.com/products/categories'
end