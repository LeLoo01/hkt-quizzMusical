<?php 
    include('Connection.php');
    // permet de hasher un mdp pour l'ajouter dans la db
    // echo password_hash('admin', PASSWORD_DEFAULT);

    class User extends Connection {


// ============ CONNEXION =========
        // retourne l'utilisateur si il existe
        public function verify($nom) {
            if (empty($nom)) {
                return false;
            }
            try {
                $requete = "SELECT * FROM joueur WHERE nom = :nom";
                $params = array(
                    ":nom" => $nom,
                
                );

                if($this->execute($requete, $params)!= null){
                    $data = $this->execute($requete, $params)[0];
                    // //var_dump($data);
                    // //var_dump('Utilisateur is ok');
                    $arrayData = array(
                        "nom" => $data["nom"],
                        "id" => $data["id"],
                    );
                    return $arrayData;
                    }
				else {
						// l'utilisateur n'existe pas
					return false;
					}
            
            } catch (PDOException $e) {
                return false;
            }
        }



// ============ AJOUTER UN JOUEUR=========
	public function addPlayer($params)
	{
		//var_dump($params);
		
		try{
			$requete = "INSERT INTO joueur (nom) VALUES (:nom)";
			$id = $this->add($requete, $params);
			return $id;
		}
		catch(PDOException $e){
			// var_dump($e);
			return false;
		}

        $requete = "SELECT LAST_INSERT_ID() as id";

            if ($this->execute($requete) != null) {
                return $this->execute($requete, $params)[0]["id"];
            } // [0] la première ligne de notre requête de notre BD
            //retourne la premièrte ligne de mon tbaleau

            else {
                throw new Exception("Soucis lors de la création de l'user");
            }
		
	}


// ============ INSCRIPTION=========
        // retourne si le compte n'existe pas

        public function joueurNotExist($nom)
        {
            try {
                $requete = "SELECT * FROM joueur WHERE nom = :nom";
                $params = array(
                    ":nom" => $nom,
                );

                $data = $this->execute($requete, $params);


                if ($data != null && sizeof($data) >= 1) { /* forcément il fallait que ce soit égal ou sup à 1 pour éviter es doublons */
                    ////var_dump("le compte existe");
                    return false;
                }
                return true;
            } catch (PDOException $e) {
               ////var_dump($e);
                return true;
            }
        }
    


// ============ GET JOUEUR=========
        public function getJoueur($id)
        {

            try {
                $requete = "SELECT * FROM joueur WHERE id = :id"; //injection SQL on rajoute un alias // sécuriser
                $params = array(
                    ":id" => $id
                );

                if ($this->execute($requete, $params) != null) {
                    return $this->execute($requete, $params)[0];
                } // [0] la première ligne de notre requête de notre BD
                //retourne la premièrte ligne de mon tbaleau

                else {
                    throw new Exception("Pas de donnée");
                }
                return null;
            } catch (Exception $e) {
                /* //var_dump($e); */
                die();

                return null;
            }
        }

        // ============ AJOUTER UN SCORE =========
        public function addScore($id, $score){

            $requete = "UPDATE joueur SET score = :score WHERE id = :id";
            $params = array(
            ":id"=>$id,
            ":score"=> $score,
            );
            
            $this->execute($requete, $params);
            
            }



// ============ GET JOUEUR SCORE ET NOM=========
        public function getAllInfo($id)
        {

            try {
                $requete = "SELECT * FROM joueur WHERE id =:id"; //injection SQL on rajoute un alias // sécuriser
                $params = array(
                    ":id" => $id,
                );

                if ($this->execute($requete, $params) != null) {
                    return $this->execute($requete, $params)[0];
                } // [0] la première ligne de notre requête de notre BD
                //retourne la premièrte ligne de mon tbaleau

                else {
                    throw new Exception("Pas de donnée");
                }
                return null;
            } catch (Exception $e) {
                /* //var_dump($e); */
                die();

                return null;
            }
        }

        




   /* accolade globale : NE PAS SUPPRIMER */ }
