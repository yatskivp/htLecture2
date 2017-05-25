class Fighter{

		constructor(name="Name",power=100,health=1000){
			this.name = name;
			this.power = power;
			this.health = health;
		}

		setDamage(damage){
			this.health -= damage;
			console.log(`health: ${this.health}`); 
		}

		hit(enemy,point){
			let damage = point * this.power;
			enemy.setDamage(damage)
		}
	}

	class ImprovedFighter extends Fighter{

		doubleHit(){
			super.hit(enemy,point*2)
		}
	}

	let fighter = new Fighter('Pupkin',99,1000);
	let improvedFighter = new ImprovedFighter('Vasa',99,1000);

	let rand = (ln) => Math.floor(Math.random()*ln);

	(function fight(fighter,improvedFighter, ...point){
		for(let i=0; i<point.length; i++){
				fighter.hit(improvedFighter,point[rand(point.length)]);
				if(fighter.health <= 0){
					console.log(`${fighter.name} is dead`);
					return;
				}
				improvedFighter.hit(fighter,point[rand(point.length)]);				
				if(improvedFighter.health <= 0){
					console.log(`${improvedFighter.name} is dead`);
					return;
				}
		}
	})(fighter,improvedFighter,10,20,11,3);