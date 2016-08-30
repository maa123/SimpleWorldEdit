class SWE{
	constructor(x,y,z,ex,ey,ez) {
		this.sx = x;
		this.sy = y;
		this.sz = z;
		this.ex = ex;
		this.ey = ey;
		this.ez = ez;
	}
	setBlock(blockid,meta){
		var minx=(this.sx>this.ex)?this.ex:this.sx;
		var miny=(this.sy>this.ey)?this.ey:this.sy;
		var minz=(this.sz>this.ez)?this.ez:this.sz;

		var maxx=(this.sx<this.ex)?this.ex:this.sx;
		var maxy=(this.sy<this.ey)?this.ey:this.sy;
		var maxz=(this.sz<this.ez)?this.ez:this.sz;
		var i=0;
		var j=0;
		var k=0;
		while(i < maxx-minx){
			while(j < maxy-miny){
				while(k < maxz-minz){
					Level.setTile(minx+i,miny+j,minz+k,blockid,meta);
					k=(k+1)|0;
				}
				j=(j+1)|0;
			}
			i=(i+1)|0;
		}
	}
}
