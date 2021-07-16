node {
	checkout scm
	def PIPENV = "~/.local/bin/pipenv"

	stage("Build") {
		dir("api") {
			sh "pip3 install pipenv"
			sh "${PIPENV} install"
		}
	}

	stage("Unit Tests") {
		def PORT = 3306
		def ROOT = "secret_root"
		def DB	 = "movieapp"
		def USER = "movieapp"
		def PASS = "secret_user"
		try {
			docker.image("mariadb:latest").withRun("-p ${PORT}:${PORT} -e MYSQL_ROOT_PASSWORD=${ROOT} -e MYSQL_DATABASE=${DB} -e MYSQL_USER=${USER} -e MYSQL_PASSWORD=${PASS}") { c ->
				docker.image("mariadb:latest").inside("--link ${c.id}:db") {
            		sh 'while ! mysqladmin ping -hdb --silent; do sleep 1; done'
        		}
				dir("api") {
					withEnv(["DATABASE=${DB}","DBUSER=${USER}","PASSWORD=${PASS}"]){
						sh "${PIPENV} run python tests/MoviesTest.py"
						sh "${PIPENV} run python tests/CategoriesTest.py"
					}
				}
			}
		}
		catch (Exception e) {
			error "${e.getMessage()}"
		}
	}

	stage("Deploy") {
		def env = """
		|registry=${params.registry}
		|database_root_password=${params.database_root_password}
		|database_name=${params.database_name}
		|database_user=${params.database_user}
		|database_password=${params.database_password}
		""".stripMargin()
		writeFile file: ".env", text: env
		sh "docker-compose build"
		docker.withRegistry("" , "DockerCreds") {
			dir("api") {
				docker.build("${params.registry}/movie-app-api").push("latest")
			}
			dir("webapp") {
				docker.build("${params.registry}/movie-app-webapp").push("latest")
			}
		}
	}

	stage("Run") {
		try {
			def docker_host = "ssh://${params.remoteUser}@${params.remoteHost}"
			sh "DOCKER_HOST=${docker_host} docker-compose pull"
			sh "DOCKER_HOST=${docker_host} docker-compose up -d --no-build"
		}
		catch (Exception e) {
			error "${e.getMessage()}"
		}
	}

}
