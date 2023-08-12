import React from 'react'

function Responsivemenu() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='sorters'>
                    <div className="accord">
                        <div className="accord_control">PRICE</div>
                        <div className="accord_panel">
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$50")}
                                    checked={selectedPriceFilters.includes("$50")}
                                />
                                $50
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$60")}
                                    checked={selectedPriceFilters.includes("$60")}
                                />
                                $60
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$70")}
                                    checked={selectedPriceFilters.includes("$70")}
                                />
                                $70
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$80")}
                                    checked={selectedPriceFilters.includes("$80")}
                                />
                                $80
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$90")}
                                    checked={selectedPriceFilters.includes("$90")}
                                />
                                $90
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$100")}
                                    checked={selectedPriceFilters.includes("$100")}
                                />
                                $100
                            </li>
                            
                        </div>
                    </div>

                    <div className="accord">
                        <div className="accord_control">SIZE</div>
                        <div className="accord_panel">
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("SM")}
                                    checked={selectedSizeFilters.includes("SM")}
                                />
                                SM
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("MD")}
                                    checked={selectedSizeFilters.includes("MD")}
                                />
                                MD
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("LG")}
                                    checked={selectedSizeFilters.includes("LG")}
                                />
                                LG
                            </li>
                            
                        </div>
                    </div>
                        <button>CLEAR FILTER</button>
    </div>
  )
}

export default Responsivemenu