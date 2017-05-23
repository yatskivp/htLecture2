	class Fighter{

		constructor(name,power,health){
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

	let fighter = new Fighter('Pupkin',100,990);
	let improvedFighter = new ImprovedFighter('Vasa',99,10000);

	(function fight(fighter,improvedFighter, ...point){
		for(let i=0; i<point.length; i++){
			if(fighter.health != 0 || improvedFighter.health != 0){
				fighter.hit(improvedFighter,point[i]);
				if(fighter.health <= 0){
					console.log(`${fighter.name} is dead`);
					return;
				}
				improvedFighter.hit(fighter,point[i]);				
				if(improvedFighter.health <= 0){
					console.log(`${improvedFighter.name} is dead`);
					return;
				}
			}else{
				console.log('Somebody is dead:))');
			}
		}
	})(fighter,improvedFighter,10,20,11,3);
