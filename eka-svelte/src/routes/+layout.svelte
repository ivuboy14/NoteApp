<nav>
	<span><a href="/">Main page</a></span>
	<span><a href="/add">Lisää opintojakso</a></span>
	<span><a href="/list-notes">List (where notes should've been)</a></span>
</nav>
<slot />

<style>
	a{
        margin: 5px;
    }
    
    a {
        text-decoration: none;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    
    a:hover {
        background-color: #45a049;
    }
</style>