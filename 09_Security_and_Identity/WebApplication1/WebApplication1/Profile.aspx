<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Profile.aspx.cs" Inherits="WebApplication1.Profile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        First: <asp:TextBox runat="server" ID="_first"></asp:TextBox>
    </div>
    <div>
        Last: <asp:TextBox runat="server" ID="_last"></asp:TextBox>
    </div>
    <div>
        Email: <asp:TextBox runat="server" ID="_email"></asp:TextBox>
    </div>
        <div>
            <asp:Button runat="server" ID="_b" OnClick="_b_Click" text="update profile"   />
        </div>
        <div>
            <asp:Button runat="server" ID="Button1" OnClick="Button1_Click" text="Link Google Account To This Account"   />
        </div>
    </form>
</body>
</html>
