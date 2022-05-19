function submit()
{
	element_select = document.querySelector('#element_select');
    element_select_output = element_select.value;

	color_select = document.querySelector('#color_select');
    color_select_output = color_select.value;

    if(element_select_output == "1" || color_select == "1")
    {
    	document.getElementById("error").style.display = "block";
    }

    else if(element_select_output == "2")
    {
    	document.getElementById("bodyID").style.backgroundColor = color_select_output;
    	document.getElementById("error").style.display = "none";
    }

    else if(element_select_output == "3")
    {
    	document.getElementById("s_button1").style.backgroundColor = color_select_output;
    	document.getElementById("error").style.display = "none";

    }

    else if(element_select_output == "4")
    {
    	document.getElementById("s_button2").style.backgroundColor = color_select_output;
    	document.getElementById("error").style.display = "none";

    }


    else if(element_select_output == "5")
    {
    	document.getElementById("d_text").style.color = color_select_output;
    	document.getElementById("error").style.display = "none";

    }
    else
    {
    	document.getElementById("error").style.display = "none";
    }
}

