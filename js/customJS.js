 jQuery(document).ready(function ($) {
	 $("#kitchenEquipmentsTab").click();
	 loadHotEquipments();
	 loadPrepreparationEquipments();
	 loadFastFoodEquipments();
	 loadDisplayCounters();
	 loadTrolleys();
	 loadWashingEquipments();
	 loadGasEquipments();
	 loadOtherProducts();
	 loadImportEquipments();
 });

function productClicked(){
	$("#kitchenEquipmentsTab").click();
}

 function loadOtherProducts(){
	 loadSpecialProducts();
	 loadBakeryEquipments();
	 loadExhaustAirSystems();
 }
 
 function loadHotEquipments(){

	 sendThreeBurnerSpec();
	 sendBulkCookerSpec();
	 sendRiceSteamerSpec();
	 sendPlateWarmerSpec();
	 sendTiltingBratPanSpec();
	 sendTiltingTypeBulkCookerSpec();
	 
	 //Cold Equipments
	 sendColdBainMarieSpec();
	 sendColdRoomSpec();
	 sendGlassDoorWisiCoolerSpec();
 }
 
 function loadPrepreparationEquipments(){

	 sendBarBlenderVal();
	 sendChickenFeatherRemovalMachineSpec();
	 sendChoppingBoardSpec();
	 sendCoconutScraperSpec();
	 sendConventionalWetGrinderSpec();
	 sendDoughKneaderSpec();
	 /*sendInstantRiceGrinderSpec();*/
	 sendInstantRiceWetGrinderSpec();
	 sendMasalaPulverizerSpec();
	 /*sendMeatMarinatorSpec();*/
	 sendMeatMincerSpec();
	 /*sendMeatSlicerSpec();
	 sendPotatoCumOnionPeelerSpec();*/
	 sendPotatoOnionBinSpec();
	 sendPotatoPeelingMachineSpec();
	 sendPreparationTableSpec();
	 sendTiltingWetGrinderSpec();
	 sendVegetableCuttingMachineSpec();
	 sendVegetableRackTrolleySpec();
	 sendWallMountingShelvesSpec();
	 sendCommercialMixerSpec();
	 sendWorkTableCounterWithDoorSpec();	 
 }
 
 function loadFastFoodEquipments(){
	 sendBainMaroeSpec();
	 sendDeepFatFryerSpec();
	 sendPizzaOverSpec();
	 sendPopcornMachineSpec();
	 sendSalamanderSpec();
	 sendSandwichGrillerSpec();
	 sendSpoonSterilizerSpec();
	 sendDoubleDeckSpec();
	 sendMilkBoilerSpec();
	 sendSugarCaneJuicerSpec();
	 sendTableTopBainMarieSpec();
	 sendTeaCoffeeDispenserSpec();
 }

 function loadDisplayCounters(){
	  sendCurvedGlassDisplayCounterSpec();
	  sendPavBhajiCounterSpec();
	  sendSSChatCounterSpec();
	  sendSSParcelCounterSpec();
	  sendHotDisplayCaseSpec();
	  sendStraightGlassDisplayCounterSpec();
	  sendSweetCornMomoCounterSpec();
	  sendSweetCornsMomosFryingTrolleySpec();
	  sendTeaCoffeCounterSpec();
 }
 
 function loadTrolleys(){
	 sendMasalaTrolleySpec();
	 sendPlatformTrolleySpec();
	 sendWasteCollectionTrolleySpec();
	 sendHotFoodTrolleySpec();
	 sendHouseKeepingTrolleySpec();
	 sendLuggageTrolleySpec();
	 sendRoomaliRotiTrolleySpec();
	 sendTeaSnacksTrolleySpec();
	 sendSoliedDishCollectionTrolleySpec();
 }
 
 function loadWashingEquipments(){
	 sendChutTableSpec();
	 sendCleanDishRackSpec();
	 sendCleanPlateStockingRackSpec();
	 sendHandWashSinkSpec();
	 sendHoodTypeDishwasherSpec();
	 sendPotRackSpec();
	 sendRiceWasherSpec();
	 sendSingleSinkSpec();
	 sendSSTrayRackSpec();
	 sendThreeSinkUnitSpec();
	 sendUnderCounterDishWasherSpec();
	 sendvegetableWasherSpec();
 }
 
 function loadGasEquipments(){
	 sendGasBankSpec();
	 sendGasLineSpec();
 }
 
 function loadSpecialProducts(){
	 sendChapatiPressingMachineSpec();
	 sendChapatiBallCuttingMachineSpec();
	 sendCommercialIdliSpec();
	 sendDosaMakingMachineSpec();
	 sendElectricalKadaiSpec();
	 sendElectricalDosaPlateSpec();
	 sendIdiyappamMakingMachineSpec();
	 sendRotaryChapatiMakingMachineSpec();
	 sendSemiAutomatiChapatiSpec();
	 sendSemiBackedChapatiSpec();
	 sendTiltingTypeBulkSpec();
 }
 
 function loadBakeryEquipments(){
	 sendBakeryProoferSpec();
	 sendBreadSlicerSpec();
	 sendDoughDividerSpec();
	 sendInfraredBakingOvenSpec();
	 sendPlanetaryMixerSpec();
	 sendRotaryRackOvenSpec();
	 sendSmart6500DoughSheetSpec();
	 sendSpiralMixerSpec();
 }
 
 function loadExhaustAirSystems(){
	 sendairFlowFanSpec();
	 sendcentrifugalBlowerSpec();
	 sendexhaustHoodFiltersSpec();
	 sendbaffleTypeFilterSpec();
	 sendfireSuppressionSpec();
	 sendhighEfficiencyExhaustHoodSpec();
 }
 
 function loadImportEquipments(){
	 sendBarBlenderSpec();
	 sendCoffeeGrinderSpec();
	 sendCoffeeMachineSpec();
	 sendCombiSteamerSpec();
	 sendGasRangesSpec();
	 sendSolidFuelFoodWarmerSpec();
 }
 
 function addSpecification(url,spec,idVal,spanArray,valArray,oneSpan,spanDivRel){
	 
	  var spanDiv = document.createElement("div");
	 spanDiv.className = "span6";
	 spanDiv.innerHTML = "<img src='"+url+"' alt='project 9'>";
	 
	 var secSpan = document.createElement("div");
	 secSpan.className = "span6";
	 
	 var projectDes = document.createElement("div");
	 projectDes.className ="project-description";
	 
	 var projectDes1 = document.createElement("div");
	 projectDes1.className ="project-title clearfix";
	 projectDes1.innerHTML = " <h3>"+spec+"</h3> <span class='show_hide close' rel='#"+spanDivRel+"'>  <i class='icon-cancel'></i> </span>"
	 
	 var projectDes2 = document.createElement("div");
	 projectDes2.className ="project-info";
	 
	 var specDesc = "";
		 for(var i = 0;i < spanArray.length;i++){
			 if(!oneSpan){
				specDesc = specDesc + "<span>"+spanArray[i]+" </span> "+valArray[i]+" <br/>";
			 }else{
				 specDesc = specDesc + "<span style='width: 550px !important;'>"+spanArray[i]+" </span> <br/>";
			 }
		 }
		 
	 
	 projectDes2.innerHTML = "<div>"+specDesc+"</div>"+"<div class='btnEnquiry' style='margin-left: 211px;margin-top: 57px;'><a href='#sendEnquiry' rel='#sendEnquiry' onclick=\"getEnquiry('"+spec+"');\">Send Enquiry</a></div>";
	 
	 projectDes1.append(projectDes2);
	
	 projectDes.appendChild(projectDes1);
	 
	 secSpan.appendChild(projectDes);
	 
	 document.getElementById(idVal).appendChild(spanDiv);
	 
	 document.getElementById(idVal).appendChild(secSpan);
 }
 
 function addSpecificationImported(url,spec,idVal,spanArray,valArray,oneSpan,spanDiv){
	 
	  var spanDiv = document.createElement("div");
	 spanDiv.className = "span5";
	 spanDiv.style = "margin-left:103px;";
	 spanDiv.innerHTML = "<img src='"+url+"' alt='project 9'>";
	 
	 var secSpan = document.createElement("div");
	 secSpan.className = "span5";
	 
	 var projectDes = document.createElement("div");
	 projectDes.className ="project-description";
	 
	 var projectDes1 = document.createElement("div");
	 projectDes1.className ="project-title clearfix";
	 projectDes1.innerHTML = " <h3>"+spec+"</h3> <span class='show_hide close'>  <i class='icon-cancel'></i> </span>"
	 
	 var projectDes2 = document.createElement("div");
	 projectDes2.className ="project-info";
	 
	 var specDesc = "";
		 for(var i = 0;i < spanArray.length;i++){
			 if(!oneSpan){
				specDesc = specDesc + "<span>"+spanArray[i]+" </span> "+valArray[i]+" <br/>";
			 }else{
				 specDesc = specDesc + "<span style='width: 550px !important;'>"+spanArray[i]+" </span> <br/>";
			 }
		 }
		 
	 
	 projectDes2.innerHTML = "<div>"+specDesc+"</div>";
	 
	 projectDes1.append(projectDes2);
	
	 projectDes.appendChild(projectDes1);
	 
	 secSpan.appendChild(projectDes);
	 
	 document.getElementById(idVal).appendChild(spanDiv);
	 
	 document.getElementById(idVal).appendChild(secSpan);
}
 
 function sendThreeBurnerSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/Three_Burner.JPG";
		var spec ="Three Burner Specifications";
		var idVal = "ThreeBurnerSpec";
		var spanArray = ["Gas Consumptions","Material thickness","Burner head","Frame","Legs","Top","Pan support","Burners","NC Valve","Pigtail","Available Size"];
		var valArray = ["0.5 Kg / Hrs – 1.5 Kg / Hrs","0.8mm – 3.15mm","T35 G11, G9 M10","11/4''x11/4'' MS Angle Frame","Made out of 11/2'' OD 16SWG SS pipe legs with adjustable bullet legs.","Made out of 304 Grade 16 SWG SS sheet, 18SWG SS side paneling on 04 – sides.","Cast iron pan support","Varies as per range","Varies as per range","Varies as per range","72'' x 24'' x 18'' Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv2");
}
function sendBulkCookerSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/Bulk_cooker.JPG";
		var spec ="Bulk Cooker Specifications";
		var idVal = "BulkCookerSpec";
		var spanArray = ["Fuel","Heating Type","Vessel","Steam Injection","Cleaning Type","Pressure Release","Tilted","Frame","Insulation","Lids","Handles","Standard Capacity","Available Size"];
		var valArray = ["LPG/Steam","Double jacket","Full stainless steel heavy duty vessel","Direct steam injection","Removable perforated(easy to clean) tray to drain water from cooked rice.","Pressure valve release.","Lever tilted or gear tilted.","Free standing / wall mounted frame.","With or without insulation.","Spring loaded / manually opened lids.","Bakelite handles to prevent heat conductivity.","10 to 150 liters. Custom made also available.","100 Ltrs 180 Ltrs"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv2");
}
function sendRiceSteamerSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/commercial-rice-boiler-.JPG";
		var spec ="Rice Steamer Specifications";
		var idVal = "RiceSteamerSpec";
		var spanArray = ["Fuel","Heating Type","Vessel","Steam Injection","Cleaning Type","Pressure Release","Tilted","Frame","Insulation","Lids","Handles","Available Size"];
		var valArray = ["LPG/Steam","Double jacket","Full stainless steel heavy duty vessel","Direct steam injection","Removable perforated(easy to clean) tray to drain water from cooked rice.","Pressure valve release.","Lever tilted or gear tilted.","Free standing / wall mounted frame.","With or without insulation.","Spring loaded / manually opened lids.","Bakelite handles to prevent heat conductivity.","10 to 35 Kg"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv2");
}
function sendPlateWarmerSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/PLATE_WARMER.JPG";
		var spec ="Plate Warmer Specifications";
		var idVal = "PlateWarmerSpec";
		var spanArray = ["Each heated tube has individual heaters and controls (thermostat, on/offswitch, light).","Tube thermostats adjustable from 100º to 160º F.","Units provided with 5-foot, 3-wire, 14-gauge power cord with NEMA 5-15 plug.","208/240V units available.","Material: polycarbonate,appropriate for dish washers","Stacking height without cover: 670 mm","Stacking height with cover: 740 mm","Capacity without cover: up to 106 parts","Capacity with cover: up to 122 parts","Available Size : 530 X 1055 X 900"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv2");
}
function sendTiltingBratPanSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/Tilting-Bratt-Pan-b.JPG";
		var spec ="Tilting Brat Pan Specifications";
		var idVal = "TiltingBratPanSpec";
		var spanArray = ["Top","Splash Back","Inner frame","Burner","Housing","Side panels","US","Drip trays","Burners","Brass Adapter","Hard ware","Legs","Available Size"];
		var valArray = ["Stainless 304Gde full spreaded 16SWG sheet top.","SS 18SWG Sheet 14' Ht. Splash back with 4' width water drain chamber with w sides supports.","MS 35x35x5mm Tk 'L' angle frame work","MS dia 350x250x8 Tk sheet 2 nos.","Drums with heavy duty round casting grids.","SS 20SWG right round panels.","SS 18SWG SS sheet","02 Nos SS 20 SWG Drip trays","02 Nos T-35 Burners with pilot and industrial control system","01 No","9' Tata 'C' class MS pipe.","Made out of 11/2'' OD 16SWG SS pipe legs with adjustable nylon boots.","48' x 24' x 34' + 14' Ht."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv2");
}
function sendTiltingTypeBulkCookerSpec(){
	    var url = "images/kitchen_equipments/Hot_equipment/tilting-type-bulk-cooker-.JPG";
		var spec ="Tilting Type Bulk Cooker Specifications";
		var idVal = "TiltingTypeBulkCookerSpec";
		var spanArray = ["Fuel","Heating Type","Vessel","Steam Injection","Cleaning Type","Pressure Release","Tilted","Frame","Insulation","Lids","Handles","Standard Capacity","Available Size"];
		var valArray = ["LPG/Steam","Double jacket","Full stainless steel heavy duty vessel","Direct steam injection","Removable perforated(easy to clean) tray to drain water from cooked rice.","Pressure valve release.","Lever tilted or gear tilted.","Free standing / wall mounted frame.","With or without insulation.","Spring loaded / manually opened lids.","Bakelite handles to prevent heat conductivity.","10 to 150 liters. Custom made also available.","100 Ltrs 180 Ltrs 250 Ltrs"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv2");
}

//Cold Equipments

function sendColdBainMarieSpec(){
		var url = "images/kitchen_equipments/Cold_equipment/Cold_Bain_Marie_Salad_Counter.JPG";
		var spec ="Cold Bain Marie Specifications";
		var idVal = "ColdBainMarieSpec";
		var spanArray = ["Dimensions Tubular Legs<br/>","Vie-301  1650 x 675 x 850mm Round/ Square<br/>","Vie-301a 1500 x 675 x 850mm Round/ Square<br/>","Excellent texture<br/>","Excellent texture<br/>","Excellent finishing<br/><br/>","Available Size : Equipment can be fabricated in any custom size to suit as per requirement."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv");
}

function sendColdRoomSpec(){
		var url = "images/kitchen_equipments/Cold_equipment/cold-rooms.JPG";
		var spec ="Cold Room Specifications";
		var idVal = "ColdRoomSpec";
		var spanArray = ["<b>WALK IN CHILLER</b> <br/> Tempt","Pull down time","Puff insulation","Cooling capacity","Power Consumption","Supply(v/ph/hz)","Compressor","<b>Walk IN Cooler</b> <br/>  Tempt","Pull down time","Puff insulation","Cooling capacity","Power Consumption","Supply(v/ph/hz)","Compressor","Available Size"];
		var valArray = ["+2ºC to 10ºC","24 Hrs","60 mm","15000BTUS/HR","2.5 kw","230/1/50","Copeland-Kirloskar/ Tecumseh","-18ºC to -20ºC","24 Hrs","100 mm","7000BTUS/HR","5.5 kw","230/1/50","Kirloskar/ Tecumseh","3000 x 2400 x 2500"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv");
}

function sendGlassDoorWisiCoolerSpec(){
		var url = "images/kitchen_equipments/Cold_equipment/Glass_Door_Wisi_Cooler.JPG";
		var spec ="Glass Door Wisi Cooler Specifications";
		var idVal = "GlassDoorWisiCoolerSpec";
		var spanArray = ["UV protected galvanized sheets for interior and exterior","Adjustable plastic-coated wire mesh shelves","Energy- efficient cooling unit","Eco-friendly refrigerant (R134a)","Uniform cooling by forced air circulation","Clear product visibility with dual glass","Self-closing door","Canopy for merchandising with rear illumination","Tested for higher ambient and outdoor conditions","Available Size : 220 to 1500"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv");
}

//Pre-Preparation Equipments

 function sendBarBlenderVal(){
	    var url = "images/kitchen_equipments/PrePreparation_equipments/Bone_Saw_Machine.JPG";
		var spec ="Bone Saw Machine Specifications";
		var idVal = "BoneSawMachineSpec";
		var spanArray = ["Motor Capacity ","Vol. /fre ","Power ","Blade dia ","Table size ","Cutting thick ","Weight ","Available Size "];
		var valArray = ["3 Hp","220/110v 50/60hz","0.93kw","210mm","400x436mm","4-180mm","60kg","530 x 500 x 950mm"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendChickenFeatherRemovalMachineSpec(){
	 
	    var url = "images/kitchen_equipments/PrePreparation_equipments/Chicken_Feather_Removal_Machine.JPG";
		var spec ="Chicken Feather Removal Machine Specifications";
		var idVal = "ChickenFeatherRemovalMachineSpec";
		var spanArray = ["Available Size:","","Quality","Heavy Angle","Heavy Motor","Power(W)","Voltage","Weight"];
		var valArray = ["3 birds, 5 birds. 8 birds. 10 birds. 12 birds","Hi efficient double rope and gearbox system","Export quality product"," 6 mm, 8 mm","1 hp motor"," 0.75 kw","380V/ 220V","52 kg"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendChoppingBoardSpec(){
	 
	    var url = "images/kitchen_equipments/PrePreparation_equipments/Chopping_board.JPG";
		var spec ="Chopping Board Specifications";
		var idVal = "ChoppingBoardSpec";
		var spanArray = ["Tops","Cores","Frames","Under shelves ","Available Size "];
		var valArray = ["1.2mm Thick stainless steel, No. 4 finish","3.0mm Zincallume with top hat stiffening","38mm dia. round stainless steel tube, satin polished, 1.2mm thick","1.2mm Thick stainless steel, No. 4 finish with top hat stiffening","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendCoconutScraperSpec(){
	 
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/coconut_scraper.JPG";
		var spec ="Coconut Scraper Specifications";
		var idVal = "CoconutScraperSpec";
		var spanArray = ["Model","Capacity","Power","Volts (V)","Amps (A)"];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendConventionalWetGrinderSpec(){
	 
    	 var url = "images/kitchen_equipments/PrePreparation_equipments/Conventional_wet_grinder.JPG";
		var spec ="Conventional Wet Grinder Specifications";
		var idVal = "ConventionalWetGrinderSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/Conventional_wet_grinder_spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendDoughKneaderSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Dough_kneader.JPG";
		var spec ="Dough Kneader Specifications";
		var idVal = "DoughKneaderSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/Dough_Kneader_Spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendInstantRiceGrinderSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/instant_rice_grinder.JPG";
		var spec ="Instant Rice Grinder Specifications";
		var idVal = "InstantRiceGrinderSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/instant_wet_grinder_spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendInstantRiceWetGrinderSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Instant_rice_wet_grinder.JPG";
		var spec ="Instant Rice Wet Grinder Specifications";
		var idVal = "InstantRiceWetGrinderSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/instant_wet_grinder_spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendMasalaPulverizerSpec(){
	    var url = "images/kitchen_equipments/PrePreparation_equipments/Masala_pulverizer.JPG";
		var spec ="Masala Pulverizer Specifications";
		var idVal = "MasalaPulverizerSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/Masala_pulverizer_spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendMeatMarinatorSpec(){
	 
	    var url = "images/kitchen_equipments/PrePreparation_equipments/Meat_Marinator.JPG";
		var spec ="Meat Marinator Specifications";
		var idVal = "MeatMarinatorSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/Dough_Kneader_Spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendMeatMincerSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Meat_Mincer.JPG";
		var spec ="Meat Mincer Specifications";
		var idVal = "MeatMincerSpec";
		var spanArray = ["MOTOR DRIVE","Meat Output","Phase","Motor","Input Power","Size","Weight","Voltage","Available Size"];
		var valArray = ["MEAT MINCER 32SL","500Kgs/Hour","Single phase capacitor start and run","ISO ,CE, GS, TUV UL  approval. Single phase capacitor start and run","1.5KW","53X27X50cm","50kg","220V/380V 1420R/MIN","50 kg"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendMeatSlicerSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Meat_Slicer.JPG";
		var spec ="Meat Slicer Specifications";
		var idVal = "MeatSlicerSpec";
		var spanArray = ["FYI"];
		var valArray = ["FYI"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendPotatoCumOnionPeelerSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Potato_cum_onion_peeler.PNG";
		var spec ="Coconut Scraper Specifications";
		var idVal = "CoconutScraperSpec";
		var spanArray = ["Model","Capacity","Power","Volts (V)","Amps (A)"];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendPotatoOnionBinSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Potato_onion_bin.JPG";
		var spec ="Potato Onion Bin Specifications";
		var idVal = "PotatoOnionBinSpec";
		var spanArray = ["These bins are made available by us in various specifications and in custom-built range, so as to suit the requirements of the patrons.","Good Dimensional accuracy.","Robustness","Durability","This product is provided with wheels for easy transmission.","Available Size: Equipment can be fabricated in any custom size to suit as per requirement."];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv4");
 }
 
 function sendPotatoPeelingMachineSpec(){
	var url = "images/kitchen_equipments/PrePreparation_equipments/potato_peeling_machine.JPG";
	var spec ="Potato Peeling Machine Specifications";
	var idVal = "PotatoPeelingMachineSpec";
	var specUrl = "images/kitchen_equipments/PrePreparation_equipments/potato_peeling_machine_spec.JPG";
	addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
	}
 
 function sendPreparationTableSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Preparation_table.JPG";
		var spec ="Preparation Table Specifications";
		var idVal = "PreparationTableSpec";
		var spanArray = ["Top","U/S","Legs","Bush","Grade","Available Size"];
		var valArray = ["Fabricated out of SS 304 Grade 16swg thick","Made out of shelf  18 swg thick", "made out of 16 swg  thick 1 ½ '' square pipe","adjustable nylon bullet bush.","SS 304 or 202","<br/>48''x24''x34''+6''<br/> Equipment can be fabricated in any custom size to suit as per requirement. "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendTiltingWetGrinderSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Tilting_Wet_Grinder.JPG";
		var spec ="Tilting Wet Grinder Specifications";
		var idVal = "TiltingWetGrinderSpec";
		var specUrl = "images/kitchen_equipments/PrePreparation_equipments/tilting_wet_grinder_spec.JPG";
		addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendVegetableCuttingMachineSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Vegetable_cutting_machine.JPG";
		var spec ="Vegetable Cutting Machine Specifications";
		var idVal = "VegetableCuttingMachineSpec";
		var spanArray = ["Model","Capacity","Power","Volts (V)","Amps (A)"];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendVegetableRackTrolleySpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Vegetable-Rack-Trolley.JPG";
		var spec ="Vegetable Rack Trolley Specifications";
		var idVal = "VegetableRackTrolleySpec";
		var spanArray = ["Full stainless steel body with food grade ventilated plastic crate.","High quality swiveling castor with brake. ","Vertical lever lock with handle help to move the trolley easily and safely. ","Special design for easy placement and removal of crate. ","Easy assessment of stocked vegetables. ","Standard size/custom made available."," Available Size: 36'' X 20'' X 66'' Equipment can be fabricated in any custom size to suit as per requirement."];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv4");
 }
 
 function sendWallMountingShelvesSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Wall_Mounting_Shelves.JPG";
		var spec ="Wall Mounting Shelves Specifications";
		var idVal = "WallMountingShelvesSpec";
		var spanArray = ["Available Size"];
		var valArray = ["<br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv4");
 }
 
 function sendCommercialMixerSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/commercial-mixer.JPG";
		var spec ="Commercial Mixer Specifications";
		var idVal = "CommercialMixerSpec";
		var spanArray = ["Excellent looking Compact Design","<br/>Heavy Duty Stainless steel body","<br/>Continues Grinding Capacity","<br/>Gravy of Veg., Wet & Dry Grinding of Grain & Vegetable.","<br/>Cutting /Grinding blades are made from high tensile s.s.","<br/>Electric Motor of 1.5 H.P. @ 2800 RPM single phase","<br/>Easy to clean","<br/>Less Noisy","<br/>Low Maintenance","<br/>Lifting handle for easy movement of machine","<br/>Two Version of machine with 3 Ltr. Jar & 5 Ltr. Jar","<br/>Grinding capacity depends on Materials to grind, generally it starts 3,5,9,10 LTRS"];
		var valArray = [" "];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv4");
 }
 
 function sendWorkTableCounterWithDoorSpec(){
	 	var url = "images/kitchen_equipments/PrePreparation_equipments/Work_Table_Counter_With_Door.JPG";
		var spec ="Work Table Counter With Door Specifications";
		var idVal = "WorkTableCounterWithDoorSpec";
		var spanArray = ["Thick gauge stainless steel top with splash back","Sound muffling application incorporated","Splash back prevents water splash","Stainless steel legs with adjustable bullet feet","Two under shelves to stock sufficiency","Stainless steel inner frame provided for work top and under shelves","Standard size/Custom made available","With/Without overflow system available","Single/twin shelves available as per requirement","Available Size : 48'' x 24'' x 34''"];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv4");
 }
 
 //Fast Food Equipments
 
 function  sendBainMaroeSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Bain_Marie.JPG";
		var spec ="Bain Marie Specifications";
		var idVal = "BainMaroeSpec";
		var spanArray = ["Temperature","Fuel","Type Of Vessel","No. Of Vessel","Vessels id","Drainage","Operated By","Stand","Optional","Available Size"];
		var valArray = ["Hot / Cold / Neutral","Stream / Electric","GN Pan / Round Vessel","1,2,3,4,5,6,8,12","10 Lts capacity 12 Nos SS vessels with lid","01 No valve","Steam / Thermostatically heating elements.","Made out of 1 1/4'' OD 16 SWG SS pipe legs with adjustable nylon boots.","Sneeze Guard / OHS / Wheels / Slide Tray / Plate Warmer / Under Shelf","<br/>36'' x 12'' x 34''<br/> 60'' x 24'' x 34'' <br/> 72'' x 24'' x 34'' "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendDeepFatFryerSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Deep_Fat_Fryer.JPG";
		var spec ="Deep Fat Fryer Specifications";
		var idVal = "DeepFatFryerSpec";
		var spanArray = ["Top","Electricals","Available Size"];
		var valArray = ["<br/>Made out of 304 grade 18SWG SS sheet, sunk in type 2 Nos SS frying basket. To suit oil chamber SS oil chamber","<br/>Heating Elements, Front Control panel with indicating lamps thermostatically controlled heating elements SS Control with lit up mechanism for heater.","<br/><br/>425 X 900 X 850 <br/>350 X 750 X 850 <br/>1159 X 1255 X 1142 <br/>"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendPizzaOverSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Pizza_oven.JPG";
		var spec ="Pizza Oven Specifications";
		var idVal = "PizzaOverSpec";
		var spanArray = ["PX-14 @ 1500 watts","PX-16 @ 1800 watts","284°-680°F (140°-360°C) Temperature range","Electric 15 minute timer with continuous ring alarm and manual shut off","Independent, operator controlled top and bottom heat","3''(76mm) Deck height","Slide-out, heavy gauge, nickel-chrome plated wire baking rack with handle","Pull out steel crumb tray","All stainless steel exterior","Unitized, welded, aluminzed steel interior","Fully insulated","6' (1830mm) Cord & plug"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv1");
 }
 function sendPopcornMachineSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Popcorn_machine.JPG";
		var spec ="Popcorn Machine Specifications";
		var idVal = "PopcornMachineSpec";
		var spanArray = ["Machine Operating Method","Using Materials","Using Area","Works on standard","Weight Assembled","Minor assembly","Cart","Available Size"];
		var valArray = ["2000V Electric Heater & Automatic Thermo Couple Control","S.S & Aluminum","Catering, Departmental Store, Shopping Mall, Bakery, Restaurants","110 volt","49 lbs","is required","not included","17''L X 14''D X 24.0''H "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendSalamanderSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Salamander.JPG";
		var spec ="Salamander Specifications";
		var idVal = "SalamanderSpec";
		var spanArray = ["Top","Electric Load"];
		var valArray = ["Unit chamber made out of 16 SWG SS sheet 01 No  Removable SS rod grilling shelf with SS handles.","3 Kw Single Phases"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendSandwichGrillerSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Sandwich_griller.JPG";
		var spec ="Sandwich Griller Specifications";
		var idVal = "SandwichGrillerSpec";
		var spanArray = ["Capacity","Working Area","Dimensions","Electrical Load","Outer Body","Working Area","Grilling","Imported","Temperature","Insulated","Detachable Steel","Spring","High Insulation","All Electrical Parts","Single","Double"];
		var valArray = ["Double Jumbo Sandwich","14 x 10 inch","17 x 16 x 10 inch (W x D x H)","3000 Watts","Stainless Steel","Cast iron plate Non Stick coating","Top & Bottom Grilling","German make capillary thermostat with auto cut-off","up to 300Ã‚° C","outer body","steel oil collector for easy Cleaning","balanced top","fiber glass wiring","ISI marked","2.0 Kw Power Consumption","4.0 Kw Power Consumption"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendSpoonSterilizerSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/spoon-sterilizer.JPG";
		var spec ="Spoon Sterilizer Specifications";
		var idVal = "SpoonSterilizerSpec";
		var spanArray = ["Commercial Spoon sterilizer offered for Hotels, Restaurants, Banquets & catering","Fully constructed in heavy duty gauge of stainless steel","High performance water heating elements generate heat to keep food warm.","Spoon sterilizing equipped with thermostat control and rotary switch for quick response time","Model available in freestanding/mobile type variants","Available Size : 10'' X 8'' X 6'' - Equipment can be fabricated in any custom size to suit as per requirement."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv1");
}
 
 function  sendDoubleDeckSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Double_Deck_Oven.JPG";
		var spec ="Double Deck Specifications";
		var idVal = "DoubleDeckSpec";
		var spanArray = ["Model","Capacity","Power","Volts (V)","Amps (A)"];
		var valArray = ["Stand Model &Table Top/ Wall Mounted","50 to 60 Nos / Hr. (Approx)","0.5 HP ","220 V ","03:00 AM "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 
 function sendMilkBoilerSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/milk_boiler.JPG";
		var spec ="Milk Boiler Specifications";
		var idVal = "MilkBoilerSpec";
		var spanArray = ["Fuel","Heating Type","MB 10","MB 15","MB 25","MB 40","Available Size"];
		var valArray = ["LPG","Double Jacket","10 Lts Capacity","15 Lts Capacity","25 Lts Capacity","40 Lts Capacity","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 function sendSugarCaneJuicerSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Sugarcane_juicer.JPG";
		var spec ="Sugar Cane Juicer Specifications";
		var idVal = "SugarCaneJuicerSpec";
		var spanArray = ["1 H.P single phase motor","1440 RPM","It has the ratio of 30:1.","Made up of cast iron body.","Coupled with motor by means of chain &sprocket.","Guarantee available.","Sheet thickness can be varied.","Weight of each pieces were identical."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv1");
 }
 
 function sendTableTopBainMarieSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/Table_Top_Bain_Marie.JPG";
		var spec ="Table Top Bain Marie Specifications";
		var idVal = "TableTopBainMarieSpec";
		var spanArray = ["Voltage","Power","Pan Quality","Weight","Available Size"];
		var valArray = ["220 V","0.75 Kw","1x1/2 G/N(100mm deep) in Pcs.","28 Kgs.","400 x 330 x 300 <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv1");
 }
 
 function sendTeaCoffeeDispenserSpec(){
		var url = "images/kitchen_equipments/Fast_food_equipments/tea_coffee_dispenser.JPG";
		var spec ="Tea Coffee Dispenser Specifications";
		var idVal = "TeaCoffeeDispenserSpec";
		var spanArray = ["<b>Material:</b> Complete SS 304 <br/> ","<b>Capacity:</b> 5/7/10/15 Liter castor with brake.<br/>","Vertical lever lock with handle help to move the trolley easily and safely.<br/>","<b>Drainage:</b> Tap valve or ball valve<br/>","<b>No. of containers provided:</b> 2<br/>","<b>Available Size :</b> 18'' X 12'' X 8''<br/>"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv1");
 }
 
 // Display Counter
 
 function sendCurvedGlassDisplayCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Curved_glass_display_counter.JPG";
		var spec ="Curved Glass Display Counter Specifications";
		var idVal = "CurvedGlassDisplayCounterSpec";
		var spanArray = ["Available in two types of technology :","a.) Forced Draft Technology - Cooling Coil with fans for proper in and out air circulation.","b.) Static Cooling Technology - Copper pipe based cooling.","Drain with garden hose connector for ease of cleaning.","2.25'' Pffed in place 'Zero ODP' Polyol / Isolynate insulation.","Compressor: Copeland Kirloskar / Tecumseh.","Digital temperature controller provided in the unit.","Available Size : <br/> 60'' x 27'' x 50'' <br/> Equipment can be fabricated in any custom size to suit as per requirement. "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv6");
 }
 
 function sendPavBhajiCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/pav_bhaji_counter.JPG";
		var spec ="Pav Bhaji Counter Specifications";
		var idVal = "PavBhajiCounterSpec";
		var spanArray = ["Gas consumptions","Material thickness","Burner head","Legs","Frame","Top","Pan Support","Burners","NC Valve","Pigtail","Available Size"];
		var valArray = ["0.5 Kg / Hrs – 1.5 Kg / Hrs","0.8mm – 3.15mm","T35 G11, G9 M10","Made out of 11/2'' OD 16SWG SS pipe legs with adjustable bullet legs","11/4''x11/4'' MS Angle Frame","Made out of 304 Grade 16 SWG SS sheet, 18SWG SS side paneling on 04 – sides.","Cast iron pan support","Varies as per range","Varies as per range","Varies as per range","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 function sendSSChatCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/SS_Chat_Counter.JPG";
		var spec ="SS Chat Counter Specifications";
		var idVal = "SSChatCounterSpec";
		var spanArray = ["Storage Capacity","GN Pans with Lid","Power Consumptions","Temperature","Available Size"];
		var valArray = ["200 Ltrs.","1/3 x 4'' - 12 Pcs. (Polycarbonate)","675 Watts","+10° C to 0° C","60'' x 30'' x 34'' + 18'' + 36'' -- Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 function sendSSParcelCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/SS_Parcel_counter.JPG";
		var spec ="SS Parcel Counter Specifications";
		var idVal = "SSParcelCounterSpec";
		var spanArray = ["We offered parcel counters are widely used in bakeries, fast food centers and sweet shops.","It is used to display the delicious and mouth watering dishes for the customers.","We offer best SS Parcel Counter with Hot Case which are made of high grade stainless steel material.","It is a one piece material and has a  glass display in the front and a sliding steel sheet behind.","Having rigid construction, these counters are highly durable and have longer service life.","Various types of glass designs and shapes are available.","Available Size: 48''x24''x34''"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv6");
 }
 
 function sendHotDisplayCaseSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Hot_Display_Case.PNG";
		var spec ="Hot Display Case Specifications";
		var idVal = "HotDisplayCaseSpec";
		var spanArray = ["Voltage","Power","Weight","Available Size"];
		var valArray = ["220 V","3.5 Kw","112 Kgs","1500 x 750 x 860"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 function sendStraightGlassDisplayCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Straight_glass_display_counter.JPG";
		var spec ="Straight Glass Display Counter Specifications";
		var idVal = "StraightGlassDisplayCounterSpec";
		var spanArray = ["Available in two types of technology :","a.) Forced Draft Technology - Cooling Coil with fans for proper in and out air circulation.","b.) Static Cooling Technology - Copper pipe based cooling.","Drain with garden hose connector for ease of cleaning.","2.25'' Pffed in place 'Zero ODP' Polyol / Isolynate insulation.","Compressor: Copeland Kirloskar / Tecumseh.","Digital temperature controller provided in the unit.","Available Size : <br/> 60'' x 27'' x 50'' <br/> Equipment can be fabricated in any custom size to suit as per requirement. "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv6");
 }
 
 function sendSweetCornMomoCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Sweet_corn_momo_counter.JPG";
		var spec ="Sweet Corn Momo Counter Specifications";
		var idVal = "SweetCornMomoCounterSpec";
		var spanArray = ["Capacity","Power Consumptions","GN Pans","Available Size"];
		var valArray = ["1.5 kg/Batch","1.5 Kw","1/6 x 4'' = 2Pcs. / 1/9 x 4'' = 2Pcs.","36'' X 24'' X 36'' + 48'' - Equipment can be fabricated in any custom size to suit as per requirement. "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 function sendSweetCornsMomosFryingTrolleySpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Sweet_Corns_Momos_Frying_Trolley.JPG";
		var spec ="Sweet Corns Momos Frying Trolley Specifications";
		var idVal = "SweetCornsMomosFryingTrolleySpec";
		var spanArray = [""];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 function sendTeaCoffeCounterSpec(){
	 	var url = "images/kitchen_equipments/Display_counters/Tea_coffe_counter.JPG";
		var spec ="Tea Coffe Counter Specifications";
		var idVal = "TeaCoffeCounterSpec";
		var spanArray = ["Available Size"];
		var valArray = ["Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv6");
 }
 
 // Trolleys
 function sendMasalaTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/Masala_trolley.JPG";
		var spec ="Masala Trolley Specifications";
		var idVal = "MasalaTrolleySpec";
		var spanArray = ["Mobile commercial use masala trolley offered for Indian & Chinese range","Trolley available with/without under shelf.","Provision provided for 09 no. of stainless steel spice containers.","Legs made in 38mm round/Square Stainless Steel Pipes.","4'' dia heavy duty castors with brakes","Trolley can be fabricated in any custom size to suit your kitchen's requirement.","Available Size: Equipment can be fabricated in any custom size to suit as per requirement"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv3");
 }
 
 function sendPlatformTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/Platform_trolley.JPG";
		var spec ="Platform Trolley Specifications";
		var idVal = "PlatformTrolleySpec";
		var spanArray = ["Frame","Material Thickness","Top","Leg","Available Size"];
		var valArray = ["1 1/4''X1 1/4'' MS Angle frame","0.8mm-3.15mm","Made out of 304 grade 16 SWG SS Sheet,18SWG SS side paneling on 04 sides.","Made out of 11/2'' OD 16SW G SS pipe legs with adjustable bullet legs.","<br/> 36'' x 24'' x 8 +30'' <br/> 48'' x 24'' x 8'' +30'' <br/>Equipment can be fabricated in any custom size to suit as per requirement. "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendWasteCollectionTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/Waste_Collection_trolley.JPG";
		var spec ="Waste Collection Trolley Specifications";
		var idVal = "WasteCollectionTrolleySpec";
		var spanArray = ["Material Thickness","Frame","Top","Leg","Available Size"];
		var valArray = ["0.8mm - 3.15mm","1 1/4''X1 1/4'' MS Angel Frame","Made out of 304 grade 16 SWG SS Sheet,18SWG SS side paneling on 04 sides.","Made out of 11/2'' OD 16SW G SS pipe legs with adjustable bullet legs.","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendHotFoodTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/hot-food-trolley.JPG";
		var spec ="Hot Food Trolley Specifications";
		var idVal = "HotFoodTrolleySpec";
		var spanArray = ["<b>KM-MST-168 </b>GN PANS :- 1/6 X 4'' = 9 pcs.","<b>KM-MST-169 </b> GN PANS :- 1/6 X 4'' = 6 pcs","<b>Available Size :</b> <br/>24'' x 24'' x 30''<br/> 18'' x 18'' x 30'' <br/>Equipment can be fabricated in any custom size to suit as per requirement."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv3");
 }
 
 function sendHouseKeepingTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/House_Keeping_trolley.JPG";
		var spec ="House Keeping Trolley Specifications";
		var idVal = "HouseKeepingTrolleySpec";
		var spanArray = ["Material Thickness","Frame","Top","Legs","Available Size"];
		var valArray = ["0.8mm - 3.15mm","1 <sub>1/4''</sub> X 1 <sub>1/4''</sub> MS Angle Frame","Made out of 304 Grade 16 SWG SS Sheet, 18SWG SS Side paneling on 04 - sides","Made out of 11/2'' OD 16SWG SS Pipe legs with adjustable bullet legs","48'' x 22'' x 44'' <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendLuggageTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/luggage-trolley.JPG";
		var spec ="Luggage Trolley Specifications";
		var idVal = "LuggageTrolleySpec";
		var spanArray = ["Material Thickness","Frame","Top","Legs","Available Size"];
		var valArray =["0.8mm - 3.15mm","1 <sub>1/4''</sub> X 1 <sub>1/4''</sub> MS Angle Frame","Made out of 304 Grade 16 SWG SS Sheet, 18SWG SS Side paneling on 04 - sides","Made out of 11/2'' OD 16SWG SS Pipe legs with adjustable bullet legs","42'' x 30'' x 6'' + 66'' <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendRoomaliRotiTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/roomali-roti-trolley.JPG";
		var spec ="Roomali Roti Trolley Specifications";
		var idVal = "RoomaliRotiTrolleySpec";
		var spanArray = ["Material Thickness","Frame","Top","Legs","Available Size"];
		var valArray =["0.8mm - 3.15mm","1 <sub>1/4''</sub> X 1 <sub>1/4''</sub> MS Angle Frame","Made out of 304 Grade 16 SWG SS Sheet, 18SWG SS Side paneling on 04 - sides","Made out of 11/2'' OD 16SWG SS Pipe legs with adjustable bullet legs"," <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendTeaSnacksTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/Tea-Snacks-Trolley.JPG";
		var spec ="Tea Snacks Trolley Specifications";
		var idVal = "TeaSnacksTrolleySpec";
		var spanArray = ["Material Thickness","Frame","Top","Legs","Available Size"];
		var valArray =["0.8mm - 3.15mm","1 <sub>1/4''</sub> X 1 <sub>1/4''</sub> MS Angle Frame","Made out of 304 Grade 16 SWG SS Sheet, 18SWG SS Side paneling on 04 - sides","Made out of 11/2'' OD 16SWG SS Pipe legs with adjustable bullet legs"," <br/>36'' x 20'' x 3''+6'' <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv3");
 }
 
 function sendSoliedDishCollectionTrolleySpec(){
	 	var url = "images/kitchen_equipments/Trolleys/SOILED_DISH_COLLECTION_TROLLEY.JPG";
		var spec ="Solied Dish Collection Trolley Specifications";
		var idVal = "SoliedDishCollectionTrolleySpec";
		var spanArray = ["An effective handling and landing system for all dirty dishes (Crockery, cutlery and glassare), sound-deadened and sunk-in top in heavy stainless steel with built-in garbage chute."," Ailernate choice of plain overhead shelf or tabular pipe racks for glass stacking."," OFFERED WITH CUSTOM BUILT DESIGN, SIZE."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv3");
 }
 
 // Washing Equipments
 
 function sendChutTableSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Chut_Table.JPG";
		var spec ="Chut Table Specifications";
		var idVal = "ChutTableSpec";
		var spanArray = ["Top","Garbage chute","SS chute of with","SS sinking","SS pipeline","Available in","Available Size"];
		var valArray = ["16 SWG SS 304","18 SWG SS 304"," raised/ plain border","top on all sides, drain outlet"," with adj. Bullet feet","standard and custom build sizes","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv7");
 }
 
 function sendCleanDishRackSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Clean_dish_rack.JPG";
		var spec ="Clean Dish Rack Specifications";
		var idVal = "CleanDishRackSpec";
		var spanArray = ["Specification","Available Size"];
		var valArray = ["Suitable designed for storage of utensils, made of S.S. heavy gauge sheet with Uprights S.S. sq. pipes 1100 X 600 X 1650 ","<br/> 36''x20''x66'' <br/> 44''x20''x66'' <br/> 48''x20''x66'' <br/> 60''x20''x66'' <br/> 72''x20''x66'' <br/> 84''x20''x66'' <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv7");
 }
 
 function sendCleanPlateStockingRackSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Clean_Plate_Stocking_Rack.JPG";
		var spec ="Clean Plate Stocking Rack Specifications";
		var idVal = "CleanPlateStockingRackSpec";
		var spanArray = ["Stainless Steel plate rack offered for multipurpose storage.","Fully construction in heavy duty 16 gauge of 304 grade stainless steel sheet.","Shelves manufactured in stainless steel pipes.","Legs made in 38mm round/Square Stainless Steel Pipes.","Height adjustable bullet feet provided.","Rack can be fabricated in any custom size to suit as per requirement","Available Size : Equipment can be fabricated in any custom size to suit as per requirement"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendHandWashSinkSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Hand_wash_sink.JPG";
		var spec ="Hand Wash Sink Specifications";
		var idVal = "HandWashSinkSpec";
		var spanArray = ["Double knee operated valves with connecting hose and fittings","Gooseneck spouts with aerator.","Strainer with basket and wall mounting brackets.","Heavy duty 16 gauge, #304 stainless steel construction.","10'' high backsplash and 2'' drain hole or holes.","Exposed surfaces have a blended uniformed satin finish.","Front, bottom and back are formed from a single sheet with a rolled rim.","Inner radius coved corners.","Two extra large bowls separated by an extra high partition, which helps prevent splashing/contamination from one bowl to the other.","Rear integral support bracket and 14 gauge stainless steel wall clips.","Interior surfaces have a polished finish.","Available Size : Equipment can be fabricated in any custom size to suit as per requirement"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendHoodTypeDishwasherSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Hood_Type_Dishwasher.JPG";
		var spec ="Hood Type Dishwasher Specifications";
		var idVal = "HoodTypeDishwasherSpec";
		var spanArray = ["Max capacity","Water Consumptions","Wash tank Capacity","Booster Capacity","Wash Temperature","Rinse Temperature","Wash cycles","Diameter of water inlet hose","Diameter of drain pipe","Incoming water pressure","Incoming water hardness","Available Size"];
		var valArray = ["60 racks/ Hr","3 Ltrs.","32 Ltrs","14 Ltrs","60 – 65 deg C","82 – 90 deg C","120/90/60","3/4''","11/4''","0.3 to 5 Kg/cm2","0.034-0.103 g/l","696 × 712 × 1440"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv7");
 }
 
 function sendPotRackSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Pot_rack.JPG";
		var spec ="Pot Rack Specifications";
		var idVal = "PotRackSpec";
		var spanArray = ["Specification","Feature","Leg","Available Size"];
		var valArray = ["SS pipe cross support . Aero drying hooks.verticals made out SS 202 grade adjustable nylon Bushes adjustable nylon Bushes","05 nos. of stainless steel shelves are provided","Legs made in 38mm round/Square Stainless Steel Pipes","<br/>36''x20''x60''<br/> 48''x20''x60''<br/> 60''x20''x60'' <br/> 72''x20''x60'' <br/> 84''x20''x60'' <br/> Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv7");
 }
 
 function sendRiceWasherSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Rice_washer.PNG";
		var spec ="Rice Washer Specifications";
		var idVal = "RiceWasherSpec";
		var spanArray = ["Capacity","Water Pressure","Time consumption","Body type","Running period","Water Requirement","Available Size"];
		var valArray = ["15kg -100 kg","1Kg/cm2 (or) more","3 to 5 mins","S.S.Body","continuous","From over head tank","460 x 800"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv7");
 }
 
 function sendSingleSinkSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Single_sink.JPG";
		var spec ="Single Sink Specifications";
		var idVal = "SingleSinkSpec";
		var spanArray = ["Full AISI Stainless Steel 304 Food Grade Quality body construction.","SS Inner pipe frame and legs structure with Nylon adjustable bullet feet.","splash back and fall support.","Available in various sizes correspondence to their average weights.","Galvanized legs with adjustable plastic bullet foot.","Includes 1 basket drain.","Equipment can be fabricated in any custom size to suit as per requirement"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendSSTrayRackSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/SS_Tray_rack.JPG";
		var spec ="SS Tray Rack Specifications";
		var idVal = "SSTrayRackSpec";
		var spanArray = ["Stainless Steel plate rack offered for multipurpose storage.","Fully construction in heavy duty 16 gauge of 304 grade stainless steel sheet.","Stainless steel shelves are provided for Tray storage.","Legs made in 38mm round/Square Stainless Steel Pipes.","Height adjustable bullet feet provided.","Rack can be fabricated in any custom size to suit as per requirement.","Available Size : 36'' x 20'' x 66'' -- Equipment can be fabricated in any custom size to suit as per requirement. "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendThreeSinkUnitSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Three_Sink_unit.JPG";
		var spec ="Three Sink Unit Specifications";
		var idVal = "ThreeSinkUnitSpec";
		var spanArray = ["Full AISI Stainless Steel 304 Food Grade Quality body construction.","SS Inner pipe frame and legs structure with Nylon adjustable bullet feet.","SS 304 3 nos pot wash sink of 16 Swg thickness 50 mm subk inn Top with 6'' splash back and fall support","Available in various sizes correspondence to their average weights","Galvanized legs with adjustable plastic bullet foot","Includes 3 basket drains","Available Size: 66''x24''x34'' -- Equipment can be fabricated in any custom size to suit as per requirement. "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendUnderCounterDishWasherSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/Under_Counter_Dish_Washer.JPG";
		var spec ="Under Counter Dish Washer Specifications";
		var idVal = "UnderCounterDishWasherSpec";
		var spanArray = ["All double-skinned inox construction","Triple working cycles:2,1.5,3 minutes","'Rinse-Now' feature","Side controls for maximum ease of use","Both wash and rinse arms in stainless steel","One-piece moulded wash arm","Stainless steel pump filter","Additional filter on waste circuit","Safety cycle-stop feature on door opening","Built-in rinse-aid dispenser","Top and bottom wash and rinse system","Perfect ergonomics and maximum strength with a door clearance of 330 mm. Pizza dishes are not a problem anymore!","Reinforced hinges (no need for side tie rods)","Three phase power supply","Great quality of washing "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 function sendvegetableWasherSpec(){
	 	var url = "images/kitchen_equipments/Washing_equipments/vegetable_Washer.JPG";
		var spec ="Vegetable Washer Specifications";
		var idVal = "vegetableWasherSpec";
		var spanArray = ["Available in various sizes, our range can be customized as per the specifications detailed by our clients. Water is sprayed on the raw material through out the length of the drum.","<br/><b>Features: </b>","<br/><b>Easy and effective deep cleaning :</b>"," The Ultrasonic food washer uses ultrasonic waves to remove 98.9% of agricultural chemicals from fruits and vegetables easily and effectively.","<br/><b>Eliminates odor :</b>","The material of the container itself contains negative ions, which help eliminate unpleasant odors, chlorine, and other chemicals.","<br/><b>Quiet operation / easy installation :</b>","Operates using a silent vibration with no splashing over the rim. The unit sits on the counter top or fits directly in any kitchen sink.","<br/><b>Cleans dishes spotless : </b>","Repeated use of the Multi-Purpose Ultrasonic Washer will revive the original color of dishes and kitchenware.","<br/><b>Economical :</b>"," The unique design and construction of the machines is what enables us to boast of not only completely safe equipment, but also the most technically advanced ultrasonic cleaning systems in the world."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv7");
 }
 
 // Gas Equipments 
 
 function sendGasBankSpec(){
	 	var url = "images/kitchen_equipments/Gas_bank_gas_line/Gas_bank.JPG";
		var spec ="Gas Bank Specifications";
		var idVal = "GasBankSpec";
		var spanArray = ["L.P.G is the necessity of every Kitchen.","<br/>Ensuring a standardized L.P.G pipeline in Kitchen is the main objective of Fore-Tech Equipments Installation team.", "<br/>L.P.G Pipeline Installation needs an experienced workforce in order to maintain Safety of Kitchen & its equipments.","<br/>We have our own specialized L.P.G Pipeline Installation team who ensures proper fitting as per ISI standards & safety of kitchen environment.","<br/>We use best quality branded C-class pipelines, pressure regulators, valves and other supporting components ensuring the safety norms.","<br/><b>Show in process</b><br/>","<br/>Estimating the gas consumption of the kitchen equipments at peak load.","<br/>Visiting the site to determine technical & practical implementation of L.P. G Pipelines.","<br/>Creating the detailed CAD layout of pipeline showing all required stations where L.P.G pipeline will be available in the kitchen."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv8");
 }

 function sendGasLineSpec(){
	 	var url = "images/kitchen_equipments/Gas_bank_gas_line/gas_line.JPG";
		var spec ="Gas Line Specifications";
		var idVal = "GasLineSpec";
		var spanArray = ["L.P.G is the necessity of every Kitchen.","<br/>Ensuring a standardized L.P.G pipeline in Kitchen is the main objective of Fore-Tech Equipments Installation team.", "<br/>L.P.G Pipeline Installation needs an experienced workforce in order to maintain Safety of Kitchen & its equipments.","<br/>We have our own specialized L.P.G Pipeline Installation team who ensures proper fitting as per ISI standards & safety of kitchen environment.","<br/>We use best quality branded C-class pipelines, pressure regulators, valves and other supporting components ensuring the safety norms.","<br/><b>Show in process</b><br/>","<br/>Estimating the gas consumption of the kitchen equipments at peak load.","<br/>Visiting the site to determine technical & practical implementation of L.P. G Pipelines.","<br/>Creating the detailed CAD layout of pipeline showing all required stations where L.P.G pipeline will be available in the kitchen."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv8");
 }
 
 
 function addThreeDimSpecification(url,spec,idVal,specURL,spanDivRel){
	
	     var spanDiv = document.createElement("div");
		 spanDiv.className = "span6";
		 spanDiv.innerHTML = "<img src='"+url+"' alt='project 9'>";
		 
		 var secSpan = document.createElement("div");
		 secSpan.className = "span6";
		 
		 var projectDes = document.createElement("div");
		 projectDes.className ="project-description";
		 
		 var projectDes1 = document.createElement("div");
		 projectDes1.className ="project-title clearfix";
		 projectDes1.innerHTML = " <h3>"+spec+"</h3> <span class='show_hide close' rel='#"+spanDivRel+"'>   <i class='icon-cancel'></i> </span>"
		 
		 var projectDes2 = document.createElement("div");
		 projectDes2.className ="project-info";
		 
		 projectDes2.innerHTML = "<div>"+"<img src='"+specURL+"'>"+"</div>"+"<div class='btnEnquiry' style='margin-left: 211px;margin-top: 57px;'><a href='#sendEnquiry' rel='#sendEnquiry' onclick=\"getEnquiry('"+spec+"');\">Send Enquiry</a></div>";
		 
		 projectDes1.append(projectDes2);
		
		 projectDes.appendChild(projectDes1);
		 
		 secSpan.appendChild(projectDes);
		 
		 document.getElementById(idVal).appendChild(spanDiv);
		 
		 document.getElementById(idVal).appendChild(secSpan);
	 
 }
 
 // Special Products
 
 function sendChapatiPressingMachineSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/chapati-pressing-machine.JPG";
		var spec ="Chapati Pressing Machine Specifications";
		var idVal = "ChapatiPressingMachineSpec";
		var spanArray = ["Chapati Pressing Machine is an automatic chapati press machine. It takes up only two square feet of space and can produce up to 850 - 1700 ready to cook chapattis per hour.","<br/> Highly economical production due to huge savings on man power requirement and electricity compared to manual chapati making. ","<br/>Noise free operation.Flexible chapati thickness and size adjustable for your needs.Better body insulation to reduce outer body temperature and overall heat loss Type button sensor is used for precision and repeatability.","<br/>Control panel with PID based temperature controller and SSR for precise temperature.Teflon coated pressing plate.Newly designed energy efficient heater.Toggle switch for heater on/off.Machine structure and covers are made from S.S. to avoid rusting.","<br/>Easily openable and convenient body cover.Very compact in size requires less space.","<br/>Superior quality gear box for maintenance and repair free operation"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"electricalProductsSpan");
 }
 
 function sendChapatiBallCuttingMachineSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Chappathi_ball_Cutting_Machine.JPG";
		var spec ="Chapati Ball Cutting Machine Specifications";
		var idVal = "ChapatiBallCuttingMachineSpec";
		var spanArray = ["Cutting ball size can be adjusted as per requirement. (with 1 to 2 grams variation)","Weight of each and every balls are identical..","Production : 2000 balls per hour.","Machine running on Pneumatic System","Running cost is too low.","Suitable for Paratta , chapatti , Poori , Cutlet & bakery items.","Available Size : 26'X22'X65'"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"electricalProductsSpan");
 }
 
 function sendCommercialIdliSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Commercial_idli.JPG";
		var spec ="Commercial Idli Specifications";
		var idVal = "CommercialIdliSpec";
		var spanArray = ["Capacity","Types of tray","Operation","No. Of Trays","No. Idly's per tray","Available Size :"];
		var valArray = ["120 Idlies","Normal / Ghee idly","Electrical","6 Nos","20 Nos","Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendDosaMakingMachineSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/dosa-making-machine.JPG";
		var spec ="Dosa Making Machine Specifications";
		var idVal = "DosaMakingMachineSpec";
		var spanArray = ["Gas Consumptions","Production","Machine Dimension","Flour capacity","Motor","Technology Used","Control","Suitable with","Handling","Oil Capacity","Available Size"];
		var valArray = ["0.9 Kg per hour.","350 to 400 dosa per hour , 325 to 350 oothappam per hour","50' x 50' x 62'","7 Litres","1 H.P. single phase or three phase","Provided with heat reduction technology to reduce the burner heat at the outer side of the machine.","Machine is controlled under PLC.","Machine suitable for hotels , canteens and institutions","Easy handling.","Oil Capacity 1 litre","400/hr"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendElectricalKadaiSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Elactrical_Kadai.JPG";
		var spec ="Electrical Kadai Specifications";
		var idVal = "ElectricalKadaiSpec";
		var spanArray = ["Capacity","Power Ratings","Voltage","Adjustable legs.","Available Size"];
		var valArray = ["10 Ltrs","9 Kw","440 V","4'' (10 cm)","20''x8'' -- Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendElectricalDosaPlateSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Electrical_dosa_plate.JPG";
		var spec ="Electrical Dosa Plate Specifications";
		var idVal = "ElectricalDosaPlateSpec";
		var spanArray = ["Top","Frame","Panelling","Grid Size","Available Size"];
		var valArray = ["16mm Thk MS Plate top mounted on MS Angle Structure","1 ¼ x 1 ¼ MS Angle","Made out of 304 Grade 18SWG SS paneling, 6' splash on 3 sides with drainage system.","10' x 10', 12' x 12', 14' x 14', 18' x 18', 20' x 20'","48' x 24' x34' -- 60' x 24' x 34' --  72' x 24' x 34' -- Equipment can be fabricated in any custom size to suit as per requirement."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendIdiyappamMakingMachineSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/idiyappam-making-machine.PNG";
		var spec ="Idiyappam Making Machine Specifications";
		var idVal = "IdiyappamMakingMachineSpec";
		var spanArray = ["Specification","Available Size"];
		var valArray = ["Weight of idiyappam can be varied as per our requirement. -- Each and every piece is identical. -- Production: 1200 idiyappam per hour. -- Machine running on pneumatic system -- Running cost is too low.","1200/hr"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendRotaryChapatiMakingMachineSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Rotary_chapthi_making_machine.PNG";
		var spec ="Rotary Chapathi Making Machine Specifications";
		var idVal = "RotaryChapatiMakingMachineSpec";
		var spanArray = ["Production capacity","Machine Weight","Chapatti Weight","Chapatti Thickness","Machine Area","Chapatti Size","Power Required","L.P.G","Available Size"];
		var valArray = ["500 Chapati/hr 1000 Chapati/hr 2000 Chapati/hr 4000 Chapati/hr 8000 Chapati/hr","650 Kg. 1000 Kg 1300 Kg 2000 Kg. 3500 Kg.","25gm-50gm 25gm-50gm 25gm-50gm 25gm-50gm 25gm-50gm","1.5-3 mm. 1.5-3 mm. 1.5-3 mm. 1.5-3 mm. 1.5-3 mm.","5'x'3'x6' (H) 7'x3'x6' (H) 10'x3'x6' (H) 10'x4'x6' (H) 13'x4.5'x7' (H)","4' to 6' Dia 4' to 6' Dia 4' to 6' Dia 4' to 6' Dia 4' to 6' Dia","0.4 K.W 0.75 K.W 1.2 K.W 2.0 K.W 3 K.W","2.5 Kg / hr 4 Kg / hr 7 Kg / hr 12 Kg / hr 25 Kg / hr","500/HR -- 1000/HR -- 2000/HR -- 4000/HR "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendSemiAutomatiChapatiSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Semi_Automatic_Chapathi_Making_Machine.JPG";
		var spec ="Semi Automatic Chapathi Making Machine Specifications";
		var idVal = "SemiAutomatiChapatiSpec";
		var spanArray = ["These Semi Automatic Chapati Making Machine are designed to eliminate the laborious job of sheet making.","Normally it takes a lot of time and energy to sheet as the dough is very sticky and hard.","By using these machines time spent is reduced from hours to minutes with minimum effort.","<br/><b>Features:</b>","Various size and thickness of chapatis","Provided with Heavy duty castor wheel with brakes","Drive Facility for speed adjustment","True value for money","Simple to operate","Easy to clean","<br/><b>Specifications:</b>","<b>Capacity</b> 1000/2000 per Hour","<b>Motor Power :</b> 0.55kw","<b>Roll Diameter :</b> 150mm or customized","<b>Power Source :</b> Electric","<b>Voltage :</b> 220V"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"electricalProductsSpan");
 }
 
 function sendSemiBackedChapatiSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/Semi_Backed_Chappathi_Machine.JPG";
		var spec ="Semi Backed Chapathi Machine Specifications";
		var idVal = "SemiBackedChapatiSpec";
		var spanArray = [""];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"electricalProductsSpan");
 }
 
 function sendTiltingTypeBulkSpec(){
	 	var url = "images/kitchen_equipments/Electrical_equipments/tilting-type-bulk-cooker.JPG";
		var spec ="Tilting Type Bulk Cooker Specifications";
		var idVal = "TiltingTypeBulkSpec";
		var spanArray = ["Fuel LPG/Steam","Heating type Double jacket","Full stainless steel heavy duty vessel.","Direct steam injection.","Removable perforated(easy to clean) tray to drain water from cooked rice.","Pressure valve release.","Lever tilted or gear tilted.","Free standing / wall mounted frame.","With or without insulation.","Spring loaded / manually opened lids.","Bakelite handles to prevent heat conductivity.","Standard capacity - 10 to 150 liters. Custom made also available.","Available Size: 100 Ltrs -- 180 Ltrs -- 250 Ltrs "];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"electricalProductsSpan");
 }
 
 //Bakery Equipments
 
 function sendBakeryProoferSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Bakery_proofer.JPG";
		var spec ="Bakery Proofer Specifications";
		var idVal = "BakeryProoferSpec";
		var spanArray = ["<b>Features</p>","<br/>Stainless Steel Construction","<br/>Insulated on all sides","<br/>Low energy consumption","<br/>Efficient collimator","<br/>Maintain humidity & temperature accurately"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"bakeryEquipmentsSpan");
	 
 }
 
 function sendBreadSlicerSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Bread_slicer.jpg";
		var spec ="Bread Slicer Specifications";
		var idVal = "BreadSlicerSpec";
		var spanArray = ["Cut Capacity","Blade Dia","Dimension"];
		var valArray = ["160 x 205mm","250mm","545 x 530 x 465 mm (W x D x H) Other capacity models are also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"bakeryEquipmentsSpan");
 }
 
 function sendDoughDividerSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Dough_Divider.JPG";
		var spec ="Dough Divider Specifications";
		var idVal = "DoughDividerSpec";
		var spanArray = [""];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"bakeryEquipmentsSpan");
 }
 
 function sendInfraredBakingOvenSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Infrared_baking_Oven.JPG";
		var spec ="Infrared Baking Oven Specifications";
		var idVal = "InfraredBakingOvenSpec";
		var spanArray = ["capacity","Voltage v/Hz","Wattage","Thermostat","Dimension","Weight"];
		var valArray = ["40kg. /hr","380/415/3","13000","20°C - 300°c","1220 x 800 x 1190mm","125 kg."];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"bakeryEquipmentsSpan");
 }
 
 function sendPlanetaryMixerSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/planetary_Mixer.jpg";
		var spec ="Planetary Mixer Specifications";
		var idVal = "PlanetaryMixerSpec";
		var spanArray = ["Model","Code","Capacity","Dimension"];
		var valArray = ["KMI006","20202","20 Ltrs. Stainless Steel Bowl","540 x 670 x 960 mm (W x D x H) Other capacity models are also available "];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"bakeryEquipmentsSpan");
 }
 
 function sendRotaryRackOvenSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Rotary_rack_oven.JPG";
		var spec ="Rotary Rack Oven Specifications";
		var idVal = "RotaryRackOvenSpec";
		var spanArray = [""];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"bakeryEquipmentsSpan");
 }
 
 function sendSmart6500DoughSheetSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Smart_6500_Dough_Sheeter.PNG";
		var spec ="Smart 6500 Dough Sheeter Specifications";
		var idVal = "Smart6500DoughSheetSpec";
		var spanArray = ["Heavy duty frame","Variable speed of the belts from 20 to 100 cm/sec","Quick programming with “smart software”","Touch-screen control board","50 working programs to be set","Possibility of programs sequence","Automatic/manual working","Scrapers made of polyethylene and foodgraded material easy to be removed and cleaned."];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"bakeryEquipmentsSpan");
 }
 
 function sendSpiralMixerSpec(){
	 	var url = "images/kitchen_equipments/Backery_equipments/Spiral_Mixer.JPG";
		var spec ="Spiral Mixer Specifications";
		var idVal = "SpiralMixerSpec";
		var spanArray = ["Simple to use manual or automatic digital control.","Digital display of mixing time","Heavy gauge, fixed, high resist -stainless steel bowl","High torque, dual stage belt drive","Imported 2 controlled panels by micro-computer or manual.","Both bowl and beater is rotary by 2 directions and 2 speed.","The Spiral mixer mixes the dough smooth and evenly.","<br/><b>Specification: </b><br/>","<br/><b>Size:</b> 680*370*730mm","<br/><b>Voltage:</b> 220/380V","<br/><b>Drum Speed:</b> 12/24 R/Min"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"bakeryEquipmentsSpan");
 }
 
 // Exhaust and Air Flow Equipments
 
 function sendairFlowFanSpec(){
	 	var url = "images/kitchen_equipments/exhaust_ Freshair/Axial_flow_fan.JPG";
		var spec ="Air Flow Fan Specifications";
		var idVal = "airFlowFanSpec";
		var spanArray = ["Capacity","Impeller size","Motor rating","Fans speed","Operating Temperature","Efficiency","Available Size"];
		var valArray = ["1hp – 25hp","450mm – 1600","50 kw","400 – 2880","60 c","82%","300 X 1600"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"exhaustFreshAirSpan");
 }
 
 function sendcentrifugalBlowerSpec(){
	 	var url = "images/kitchen_equipments/exhaust_ Freshair/Centrifugal_Blower.jpg";
		var spec ="Centrifugal Blower Specifications";
		var idVal = "centrifugalBlowerSpec";
		var spanArray = ["Capacity","Impeller size","Motor rating","Fans speed","Operating Temperature","Efficiency","Available Size"];
		var valArray = ["25hp to 150hp","450mm – 1600","250 kw","400 – 2880","40 c","85.00%","450x450x600"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"exhaustFreshAirSpan");
 }
 
 function sendexhaustHoodFiltersSpec(){
	 	var url = "images/kitchen_equipments/exhaust_ Freshair/Exhaust_Hood_with_Filters.JPG";
		var spec ="Exhaust Hood with Filters Specifications";
		var idVal = "exhaustHoodFiltersSpec";
		var spanArray = ["The DSC short cycle kitchen extraction canopy is designed to introduce filtered untempered outside air directly into the hood thereby reducing the amount of air extracted from the kitchen.","These hoods are recommended for use in applications where the internal make up does not exceed 50% of the total extract air volume.","The canopy is manufactured from Stainless steel and is of welded construction.","All edges are enveloped and rounded free from burrs.","The contaminated air is rid of grease and other pollutants when it passes through debaff baffle filters.","The grease separated from air flows into a drain collecting channel and can be drained via an integral drain cock.","The light fixtures are splash and water proof IP 54 rated with heat resistance upto 110°C.","Fire suppression system can be easily integrated into canopy.","Standard models available are wall mounted and Is-land type"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"exhaustFreshAirSpan");
 }
 
 function  sendbaffleTypeFilterSpec(){
	 var url = "images/kitchen_equipments/exhaust_ Freshair/Baffle_Commercial_Kitchen_Grease_Filter.JPG";
	var spec ="Baffle Type Filter Specifications";
	var idVal = "baffleTypeFilterSpec";
	var specUrl = "images/kitchen_equipments/PrePreparation_equipments/baffle_type_filter_spec.JPG";
	addThreeDimSpecification(url,spec,idVal,specUrl,"slidingDiv4");
 }
 
 function sendfireSuppressionSpec(){
	 var url = "images/kitchen_equipments/exhaust_ Freshair/fire_suppression.GIF";
	var spec ="Fire Suppression Specifications";
	var idVal = "fireSuppressionSpec";
	var spanArray = ["When used in our fire suppression systems, Wet Chemical is extremely effective on fires in restaurant ventilation equipment,as well as in a variety of cooking appliances.","<br/>Suitable operating temperature is 32°F to 120°F (0°C to 49°C).","<br/>When the agent reacts with hot grease, it forms a layer of foam on the surface.","<br/>This blanket of foam acts as an insulator between the hot grease and the atmosphere."];
	var valArray = [""];
	addSpecification(url,spec,idVal,spanArray,valArray,true,"exhaustFreshAirSpan");
 }
 
 function sendhighEfficiencyExhaustHoodSpec(){
	 var url = "images/kitchen_equipments/exhaust_ Freshair/High_Efficiency_Exhaust_hood.JPG";
	var spec ="High Efficiency Exhaust Hood Specifications";
	var idVal = "highEfficiencyExhaustHoodSpec";
	var spanArray = ["The high efficiency DAC_UV hoods incorporate our patented canopy air confinement technology with side nozzles and voilet rays for effective grease extraction.","The noodles introduce air to the central part of the unit at high velocity through the nozzles.","Ultraviolet light reacts to the volatile organic compounds(VOC) and small particulate generated in the cooking process by exposing the effluent to light and by the generation of ozone(UVC).","By directing light and ozone in a particular methods, these double bonds are subsequently broken down into smaller bonds.","These smaller CO2 and H2O molecules will be easily exhausted unlike grease.","These canopy require 25 - 45% less exhaust air volumes in comparison to traditional canopies.","The canopy is manufactured from stainless steel and is of welded construction.","All edges are enveloped and rounded free from burrs.","Fire suppression system can be easily integrated into canopy.","Standard models avaliable are wall mounted and Is-land type","Available Size: Equipment can be fabricated in any custom size to suit as per requirement."];
	var valArray = [""];
	addSpecification(url,spec,idVal,spanArray,valArray,true,"exhaustFreshAirSpan");
 }
 
/* function getAMCContents(){
	 document.getElementById("serviceType").style.display="none";
 }*/
 
 function sendBarBlenderSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/Bar_Blender.JPG";
		var spec ="Bar Blender Specifications";
		var idVal = "BarBlenderSpec";
		var spanArray = ["Model","Capacity","Voltage","Dimension"];
		var valArray = ["KMI009","1.25 Ltrs. Jar","220V/50Hz./1 Phase - 600 W","180 x 180 x 420 mm (W x D x H) Other capacity models are also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv55");
 }
 
 function sendCoffeeGrinderSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/Coffe_Grinders.jpg";
		var spec ="Coffe Grinders Specifications";
		var idVal = "CoffeeGrinderSpec";
		var spanArray = ["Model","Capacity","Dimension"];
		var valArray = ["KMI011","Up to 1000 grm. of coffee bins Diameter of Knives: 63.5mm","600 x 600 x 850 mm (W x D x H) Other capacity models are also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv55");
 }
 
 function sendCoffeeMachineSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/coffee-machine.JPG";
		var spec ="Coffee Machine Specifications";
		var idVal = "CoffeeMachineSpec";
		var spanArray = ["Product","Model","Capacity","Dimension"];
		var valArray = ["Fully Automatic Coffee Machine","KMI012","Up to 180 cups per group","358 x 580 x 720 mm (W x D x H) Other capacity models are also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv55");
 }
 
 function sendCombiSteamerSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/Combi_Steamer.JPG";
		var spec ="Combi Steamer Specifications";
		var idVal = "CombiSteamerSpec";
		var spanArray = ["Product","Model","Code","Capacity","Dimension"];
		var valArray = ["Combi Steamers/Ovens (GN 1/1)","KMI031","20231","10 GN 1/1 Gas Combi Steamer","890 x 900 x 970 mm (W x D x H) Higher Capacity Models & Electric Versions also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv55");
 }
 
 function sendGasRangesSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/Gas_ranges.jpg";
		var spec ="Gas Ranges Specifications";
		var idVal = "GasRangesSpec";
		var spanArray = ["Model","Code","Capacity","Dimension"];
		var valArray = ["KMI034","20234","4 Burner Gas Range on Oven","700 x 700 x 850 mm (W x D x H) Higher Capacity Models & Gas Versions also available"];
		addSpecification(url,spec,idVal,spanArray,valArray,false,"slidingDiv55");
 }
 
 function sendSolidFuelFoodWarmerSpec(){
		var url = "images/kitchen_equipments/Imported_Equipments/Solid-Fuel-Food-warmer.JPG";
		var spec ="Solid Fuel Food Warmer Specifications";
		var idVal = "SolidFuelFoodWarmerSpec";
		var spanArray = ["The Solid Fuel Food Warmer is constructed with reinforced stainless steel that is easy-to-clean and resistant to dents or damage.","The riveted assembly delivers a tighter fit for greater long-term durability and reduced noise in transport.","It contains three spacious interior shelves that are easily removed for cleaning, and a unique gravity door lock keeps both food and flames secure during transport.","The Mobile Solid Fuel Food Warmer comes equipped with a retractable handle that makes it easy to move on its built-in casters.","Standard models can be converted to a handle with mobile wheels by changing the back panel.", "This helps prevent flammable vapors from escaping and reduces the chance for flame reignition"];
		var valArray = [""];
		addSpecification(url,spec,idVal,spanArray,valArray,true,"slidingDiv55");
 }

 function getEnquiry(obj){
	 document.getElementById("comment").value = "Want to send Enquiry on "+obj;
 }
 
 function clearValues(){
	 document.getElementById("name").value = "";
	 document.getElementById("mobileNumber").value = "";
	 document.getElementById("email").value = "";
	 document.getElementById("comment").value = "";
	 document.getElementById("successSend").style.display = "none";
	 document.getElementById("errorSend").style.display = "none";
 }