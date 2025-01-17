class AlertService {
    static invoke(alert: HTMLIonAlertElement) {
        const messageElement = alert.children[2];
        const childElement = messageElement.childNodes[1];
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = (childElement as any).innerHTML;

        const decodedHtml = tempDiv.firstChild;
        (childElement as any).innerHTML = (decodedHtml as any).data;
    }
}

export default AlertService;