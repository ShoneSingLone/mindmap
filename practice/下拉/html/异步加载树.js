       $pId = 'id';
       $pLevel = '0';
       $pName = 'n';
       $pCheck = 'chk';

       if ($pId == null || $pId == "") $pId = "0";
       if ($pLevel == null || $pLevel == "") $pLevel = "0";
       if ($pName == null) $pName = "";
       else $pName = $pName+ ".";

       for ($i = 1; $i < 5; $i++) {
           $nId = $i;
           $nName = "$pName"+$i;
           console.info(
               "{ id:'" + $nId + "',  name:'" + $nName + "',  isParent:" + (($pLevel < "2" && ($i % 2) != 0) ? "true" : "false") + ($pCheck == "" ? "" : ((($pLevel < "2" && ($i % 2) != 0) ? ", halfCheck:true" : "") + ($i == 3 ? ", checked:true" : ""))) + "}")
           if ($i < 4) {
               console.info(",");
           }
       }

