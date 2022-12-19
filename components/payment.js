export default (payment)=>{
    return `
    <div id="popup" class="popup" style="display: none;">
        <h1>Pay Via</h1>
        <button>CREDIT CARD</button>
        <button id="debit">DEBIT CARD</button>
        <button>NETBANKING</button>
        <button>PAYTM</button>
        <button>UPI</button>
        <button>EMI(CREDIT CARD)</button>
    </div>

    <div id="card-areaa" class="card-area" style="display: none;">

        <form action="action_page.php">
            <div class="cartao cartao-front">
                <div class="flex-area j-space-between a-items-center header-cartao a-items-start">
                  <h3 id="DebitFont" style="white-space: nowrap">Debit card payment</h3>
                </div>

                <label>
                    <span>Card Number</span>
                    <div class="input-area">
                      <i class="material-icons">payment</i>
                      <input type="text" id="numero-do-cartao-front" class="numero-do-cartao-front">
                    </div>
                </label>
  
                <label>
                    <span>Your Name</span>
                    <div class="input-area">
                      <input type="text" id="nome-front" class="nome-front" style="text-transform: uppercase" autocomplete="off">
                    </div>
                </label>
  
                <div class="flex-area j-space-between">
                    <label class="w-48">
                      <span>Valid Till</span>
                      <div class="input-area">
                        <input type="text" id="data-front" class="data-front" maxlength="7">
                      </div>
                    </label>
  
                    <label class="w-48">
                      <span>CVV</span>
                      <div class="input-area">
                        <input type="number" id="cvv-front" class="cvv-front" maxlength="4">
                      </div>
                    </label>
                </div>
            </div>
  
            <div id="button-area" class="flex-area j-center button-area">
              <button type="button" id="btn-comprar" class="btn-comprar">
                <span id="proceed">Proceed</span>
              </button>
            </div>
        </form>
    </div>`
}