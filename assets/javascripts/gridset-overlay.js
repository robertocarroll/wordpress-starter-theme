// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['wd','wt','wm'],
			c = [12,12,6],
			w = [1024,768,320],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:767px) {#gridsetoverlaywrap [class*=wm1],#gridsetoverlaywrap [class*=wm2],#gridsetoverlaywrap [class*=wm3],#gridsetoverlaywrap [class*=wm4],#gridsetoverlaywrap [class*=wm5],#gridsetoverlaywrap [class*=wm6],#gridsetoverlaywrap .wm-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=wm1]{width:12.944288933566053%;margin-left:0%;}#gridsetoverlaywrap [class*=wm2]{width:12.98758086979872%;margin-left:17.319288933566%;}#gridsetoverlaywrap [class*=wm3]{width:12.97752197190795%;margin-left:34.681869803365%;}#gridsetoverlaywrap [class*=wm4]{width:13.003138639551295%;margin-left:52.034391775273%;}#gridsetoverlaywrap [class*=wm5]{width:13.01201806742326%;margin-left:69.412530414824%;}#gridsetoverlaywrap [class*=wm6]{width:13.044201517752722%;margin-left:86.799548482247%;}#gridsetoverlaywrap .wm-hide{display:none !important;}}@media only screen and (min-width:768px) and (max-width:1023px) {#gridsetoverlaywrap [class*=wt1],#gridsetoverlaywrap [class*=wt2],#gridsetoverlaywrap [class*=wt3],#gridsetoverlaywrap [class*=wt4],#gridsetoverlaywrap [class*=wt5],#gridsetoverlaywrap [class*=wt6],#gridsetoverlaywrap [class*=wt7],#gridsetoverlaywrap [class*=wt8],#gridsetoverlaywrap [class*=wt9],#gridsetoverlaywrap [class*=wt10],#gridsetoverlaywrap [class*=wt11],#gridsetoverlaywrap [class*=wt12],#gridsetoverlaywrap .wt-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=wt1]{width:6.644875896414544%;margin-left:0%;}#gridsetoverlaywrap [class*=wt2]{width:6.6517333534937055%;margin-left:8.4677925664145%;}#gridsetoverlaywrap [class*=wt3]{width:6.6570639182257185%;margin-left:16.942442589908%;}#gridsetoverlaywrap [class*=wt4]{width:6.660773884613598%;margin-left:25.422423178134%;}#gridsetoverlaywrap [class*=wt5]{width:6.65818469084358%;margin-left:33.906113732748%;}#gridsetoverlaywrap [class*=wt6]{width:6.65602208261202%;margin-left:42.387215093591%;}#gridsetoverlaywrap [class*=wt7]{width:6.656688477036897%;margin-left:50.866153846203%;}#gridsetoverlaywrap [class*=wt8]{width:6.657286642431464%;margin-left:59.34575899324%;}#gridsetoverlaywrap [class*=wt9]{width:6.65783533185947%;margin-left:67.825962305672%;}#gridsetoverlaywrap [class*=wt10]{width:6.66017516184187%;margin-left:76.306714307531%;}#gridsetoverlaywrap [class*=wt11]{width:6.662388996951002%;margin-left:84.789806139373%;}#gridsetoverlaywrap [class*=wt12]{width:6.65978406367613%;margin-left:93.275111806324%;}#gridsetoverlaywrap .wt-hide{display:none !important;}}@media only screen and (min-width:1024px) {#gridsetoverlaywrap [class*=wd1],#gridsetoverlaywrap [class*=wd2],#gridsetoverlaywrap [class*=wd3],#gridsetoverlaywrap [class*=wd4],#gridsetoverlaywrap [class*=wd5],#gridsetoverlaywrap [class*=wd6],#gridsetoverlaywrap [class*=wd7],#gridsetoverlaywrap [class*=wd8],#gridsetoverlaywrap [class*=wd9],#gridsetoverlaywrap [class*=wd10],#gridsetoverlaywrap [class*=wd11],#gridsetoverlaywrap [class*=wd12],#gridsetoverlaywrap .wd-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=wd1]{width:7.06426570700682%;margin-left:0%;}#gridsetoverlaywrap [class*=wd2]{width:7.07130884330493%;margin-left:8.4314532070068%;}#gridsetoverlaywrap [class*=wd3]{width:7.0731784172421905%;margin-left:16.869949550312%;}#gridsetoverlaywrap [class*=wd4]{width:7.074476768415919%;margin-left:25.310315467554%;}#gridsetoverlaywrap [class*=wd5]{width:7.077367493904722%;margin-left:33.75197973597%;}#gridsetoverlaywrap [class*=wd6]{width:7.076714715270546%;margin-left:42.196534729875%;}#gridsetoverlaywrap [class*=wd7]{width:7.076146820938859%;margin-left:50.640436945145%;}#gridsetoverlaywrap [class*=wd8]{width:7.082507690766591%;margin-left:59.083771266084%;}#gridsetoverlaywrap [class*=wd9]{width:7.07910459916307%;margin-left:67.533466456851%;}#gridsetoverlaywrap [class*=wd10]{width:7.075939430056024%;margin-left:75.979758556014%;}#gridsetoverlaywrap [class*=wd11]{width:7.0806865328320105%;margin-left:84.42288548607%;}#gridsetoverlaywrap [class*=wd12]{width:7.080412356098321%;margin-left:92.870759518902%;}#gridsetoverlaywrap .wd-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();