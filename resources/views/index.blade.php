<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    <title>Author's Text Editor</title>
    <link rel="stylesheet" href="{{ asset('css/index.css') }}">
</head>
<body>
    
    <div id="root"></div>

    <script src="{{ asset('js/index.js') }}"></script>
</body>
</html>