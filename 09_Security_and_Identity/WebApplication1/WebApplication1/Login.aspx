<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebApplication1.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Label runat="server" Text="Username"></asp:Label>
        <asp:TextBox runat="server" ID="_uid"></asp:TextBox>
    </div>
    <div>
        <asp:Label runat="server" Text="Password"></asp:Label>
        <asp:TextBox TextMode="Password" runat="server" ID="_pwd"></asp:TextBox>
    </div>
        <asp:Button runat="server" ID="_b" OnClick="_b_Click"  Text="Login"/>
        <ul>
            <li><a runat="server" href="~/ExternalLogin.aspx?p=google">Google</a></li>
        </ul>
    </form>
</body>
</html>
