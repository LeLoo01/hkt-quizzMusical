<?php 
// abstrat pour ne pas pouvoir faire :
// $c = new Connection()
abstract class Connection {
    // private : pour sécuriser (protected, public)
    // static : pas besoin de créer un objet connection pour y accéder
    // $_connection contient toutes les infos de connexion (sgbd, lieu, db, login, mdp)
	private static $_connection;

    // déclenché lorsque
    // $c = new Connection()
    // constructeur
    // lorsque je crée new Tea() alors j'établis la connexion
	public function __construct()
	{
		$this->dbConnection();
	}
    
    // initialise la connexion si elle n'exite pas
    // sinon elle la donne
	protected function dbConnection()
    {
        // self::   car $_connection est static
        // cad accessible sans créer d'object
        // si déjà une connection, alors on la réutilise
    	if (self::$_connection !== null) {
    		return self::$_connection;
    	}
        // sinon
        // créer un objet connection
        // 1) moteur de base de données : mysql
        // 2) où se situe la base de données : localhost /!\ production
        // 3) le nom de la base de données : web10
        // 4) l'encodage de caractère : utf8
        // 5) le login pour se connecter à la db : root /!\ production
        // 6) le mdp pour se connecter à la db 
        // xampp : '' // pas de mdp /!\ production
        // mamp : 'root'
        // production : lorsque vous mettrez en ligne votre site vous recevrez de votre fournisseur les données 2, 5, 6
        self::$_connection = new PDO("mysql:host=localhost;dbname=quiz_musical;charset=utf8", 'root', 'root');
        // ::Default : mode par défaut de récupération de données
        // :: données sous forme tableau associatif
        self::$_connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        // afficher les messages d'erreurs
        self::$_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // retourne la connection
        return self::$_connection;
    }

    // permet d'exécuter facilement une query
    protected function execute($query, $params= array(), $fetchMode = null)
    {
        // prépare la requete éviter injection SQL
    	$stmt = self::$_connection->prepare($query);
        // exucute la requte
    	$stmt->execute($params);

    	if ($fetchMode !== null) {
            // retourne toutes les données sous forme de tableau
    		return $stmt->fetchAll($fetchMode);
    	} else {
    		return $stmt->fetchAll();
    	}
    	return $stmt; // Iterator (forearch)
    }

    // permet d'insérer'
    protected function add($query, $params= array())
    {
        // prépare la requete éviter injection SQL
    	$stmt = self::$_connection->prepare($query);
        // exucute la requte
    	$stmt->execute($params);

    	return self::$_connection->lastInsertId();
    }

}

 ?>